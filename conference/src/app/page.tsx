import {
  Header,
  Hero,
  Intro,
  Projects, 
  Testimonials,
  CTA,
  Footer
} from "@/sections";
export default function Home() {
  return <div className="font-sfProDisplay">
    <Header />
    <Hero />
    <Testimonials />
    <Projects />
    <Intro />
    <CTA />
    <Footer />  
  </div>
}
