import Link from "next/link";

type IconName = "bolt" | "server" | "globe" | "chart" | "team" | "shield" | "branch" | "support";

const iconPaths: Record<IconName, React.ReactNode> = {
  bolt: <path d="m13 2-8 11h7l-1 9 8-12h-7l1-8Z" />,
  server: <><rect x="3" y="4" width="18" height="6" rx="2"/><rect x="3" y="14" width="18" height="6" rx="2"/><path d="M7 7h.01M7 17h.01"/></>,
  globe: <><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18"/></>,
  chart: <><path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/></>,
  team: <><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></>,
  shield: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />,
  branch: <><circle cx="6" cy="5" r="2"/><circle cx="18" cy="7" r="2"/><circle cx="6" cy="19" r="2"/><path d="M6 7v10M8 7h5a5 5 0 0 1 5 5v-3"/></>,
  support: <><path d="M4 14a8 8 0 0 1 16 0"/><path d="M18 19c0 1.1-.9 2-2 2h-3M4 14v3a2 2 0 0 0 2 2h1v-7H6a2 2 0 0 0-2 2ZM20 14v3a2 2 0 0 1-2 2h-1v-7h1a2 2 0 0 1 2 2Z"/></>,
};

function Icon({ name, size = 20 }: { name: IconName; size?: number }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{iconPaths[name]}</svg>;
}

const plans = [
  {
    name: "Pro",
    description: "For developers shipping production apps.",
    price: 20,
    annual: 240,
    icon: "bolt" as IconName,
    cta: "Start with Pro",
    featured: false,
    features: [
      ["server", "10 production services"],
      ["globe", "Custom domains with managed SSL"],
      ["branch", "Preview deployments for every branch"],
      ["chart", "Real-time logs, metrics & alerts"],
      ["shield", "Automatic backups and rollbacks"],
      ["support", "Email support within 24 hours"],
    ] as [IconName, string][],
  },
  {
    name: "Team",
    description: "For teams running critical infrastructure.",
    price: 25,
    annual: 300,
    icon: "team" as IconName,
    cta: "Start with Team",
    featured: true,
    features: [
      ["team", "Everything in Pro, plus:"],
      ["server", "Unlimited production services"],
      ["team", "Unlimited team members & roles"],
      ["branch", "Shared environments and approvals"],
      ["shield", "Advanced security and audit logs"],
      ["chart", "Longer log and metric retention"],
      ["support", "Priority support within 4 hours"],
    ] as [IconName, string][],
  },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <Link href="#" className="brand" aria-label="Best Space home">
          <span className="brand-mark"><span /><span /><span /></span>
          <span>Best Space</span>
        </Link>
        <nav aria-label="Main navigation">
          <Link href="#features">Features</Link>
          <Link href="#how-it-works">How it works</Link>
          <Link href="#pricing" className="active">Pricing</Link>
        </nav>
        <Link href="#pricing" className="header-cta">Start deploying <span>→</span></Link>
      </header>

      <section className="pricing-hero" id="pricing">
        <div className="grid-backdrop" aria-hidden="true" />
        <div className="hero-copy">
          <div className="eyebrow"><span><Icon name="bolt" size={13} /></span> Simple, predictable pricing</div>
        </div>

        <div className="plan-grid">
          {plans.map((plan) => (
            <article className={`plan-card${plan.featured ? " featured" : ""}`} key={plan.name}>
              {plan.featured && <div className="popular-badge">MOST POPULAR</div>}
              <div className="plan-top">
                <span className="plan-icon"><Icon name={plan.icon} size={24} /></span>
                <div>
                  <h2>{plan.name}</h2>
                  <p>{plan.description}</p>
                </div>
              </div>
              <div className="price-row"><span className="currency">$</span><strong>{plan.price}</strong><span className="per">/ month</span></div>
              <p className="annual-note">${plan.annual} billed annually</p>
              <Link href={`mailto:hello@noserver.dev?subject=${plan.name}%20plan`} className="plan-button">{plan.cta} <span>→</span></Link>
              <div className="feature-block">
                <h3>{plan.name === "Pro" ? "Everything you need to deploy" : "Built for shipping together"}</h3>
                <ul>
                  {plan.features.map(([icon, label], index) => (
                    <li key={label} className={plan.featured && index === 0 ? "included" : ""}>
                      <span><Icon name={icon} size={17} /></span>{label}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>
      <footer id="how-it-works">
        <Link href="#" className="brand"><span className="brand-mark"><span /><span /><span /></span><span>Best Space</span></Link>
        <p>Push your code. We&apos;ll handle the rest.</p>
      </footer>
    </main>
  );
}
