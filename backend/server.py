from fastapi import FastAPI, APIRouter
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict
from typing import List
import uuid
from datetime import datetime, timezone
import smtplib
from email.message import EmailMessage


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")


# Define Models
class StatusCheck(BaseModel):
    model_config = ConfigDict(extra="ignore")  # Ignore MongoDB's _id field
    
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class StatusCheckCreate(BaseModel):
    client_name: str


# Contact email model
class ContactEmail(BaseModel):
    name: str
    email: str
    phone: str | None = None
    service: str | None = None
    message: str

# Add your routes to the router instead of directly to app
@api_router.get("/")
async def root():
    return {"message": "Hello World"}

@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_dict = input.model_dump()
    status_obj = StatusCheck(**status_dict)
    
    # Convert to dict and serialize datetime to ISO string for MongoDB
    doc = status_obj.model_dump()
    doc['timestamp'] = doc['timestamp'].isoformat()
    
    _ = await db.status_checks.insert_one(doc)
    return status_obj

@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    # Exclude MongoDB's _id field from the query results
    status_checks = await db.status_checks.find({}, {"_id": 0}).to_list(1000)
    
    # Convert ISO string timestamps back to datetime objects
    for check in status_checks:
        if isinstance(check['timestamp'], str):
            check['timestamp'] = datetime.fromisoformat(check['timestamp'])
    
    return status_checks


# Endpoint to receive contact form submissions and send as email
@api_router.post('/send-email')
async def send_email(contact: ContactEmail):
    """Send contact form to configured recipient using SMTP.

    Environment variables used:
    - SMTP_HOST (optional)
    - SMTP_PORT (optional)
    - SMTP_USER (optional)
    - SMTP_PASS (optional)
    - FROM_EMAIL (optional)
    - CONTACT_RECIPIENT (optional, default kontact@dnamangement.de)
    """
    recipient = os.environ.get('CONTACT_RECIPIENT', 'kontact@dnamangement.de')

    subject = f"New contact form submission from {contact.name}"
    body = (
        f"Name: {contact.name}\n"
        f"Email: {contact.email}\n"
        f"Phone: {contact.phone or ''}\n"
        f"Service: {contact.service or ''}\n\n"
        f"Message:\n{contact.message}\n"
    )

    smtp_host = os.environ.get('SMTP_HOST')
    smtp_port = int(os.environ.get('SMTP_PORT', '0') or 0)
    smtp_user = os.environ.get('SMTP_USER')
    smtp_pass = os.environ.get('SMTP_PASS')
    from_email = os.environ.get('FROM_EMAIL', smtp_user or 'no-reply@example.com')

    # Build email
    msg = EmailMessage()
    msg['Subject'] = subject
    msg['From'] = from_email
    msg['To'] = recipient
    msg.set_content(body)

    if not smtp_host:
        # SMTP not configured: log and return a non-fatal response
        logger.info('SMTP not configured. Contact email content:\n%s', body)
        return {'sent': False, 'detail': 'SMTP not configured; email logged on server.'}

    try:
        if smtp_port == 465:
            server = smtplib.SMTP_SSL(smtp_host, smtp_port, timeout=10)
        else:
            server = smtplib.SMTP(smtp_host, smtp_port or 587, timeout=10)
            server.ehlo()
            server.starttls()

        if smtp_user and smtp_pass:
            server.login(smtp_user, smtp_pass)

        server.send_message(msg)
        server.quit()

        logger.info('Contact email sent to %s from %s', recipient, from_email)
        return {'sent': True}
    except Exception as exc:
        logger.exception('Failed to send contact email')
        return {'sent': False, 'detail': str(exc)}

# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()