import Interactions from '../components/Interactions'
import TweaksRoot from '../components/Tweaks'

export default function Home() {
  return (
    <>
      {/* NAV */}
      <header className="nav" id="nav">
        <div className="wrap nav-inner">
          <a className="brand" href="#top" aria-label="The M&T Company home">
            <div className="logo-mark" aria-hidden="true">M&amp;T</div>
            <span className="brand-name">The M<span className="amp">&amp;</span>T Company</span>
          </a>
          <nav className="nav-links" aria-label="Primary">
            <a href="#services">Services</a>
            <a href="#how">How it works</a>
            <a href="#about">About us</a>
            <a href="#faq">FAQ</a>
          </nav>
          <div className="nav-cta">
            <a href="#contact" className="btn btn-primary">Get in touch</a>
            <button className="nav-toggle" id="navToggle" aria-label="Open menu" aria-expanded="false" type="button">
              <span></span><span></span><span></span>
            </button>
          </div>
        </div>
      </header>

      <div className="mobile-menu" id="mobileMenu">
        <a href="#services">Services</a>
        <a href="#how">How it works</a>
        <a href="#about">About us</a>
        <a href="#faq">FAQ</a>
        <a href="#contact" className="btn btn-primary">Get in touch</a>
      </div>

      <main id="top">

        {/* HERO */}
        <section className="hero">
          <div className="wrap hero-grid">
            <div className="hero-copy">
              <h1 className="reveal">
                Stop doing it<br /><em>by hand.</em>
              </h1>
              <p className="sub reveal d2">
                Matthew and Thomas help local businesses cut the repetitive work — connecting your tools, automating your workflows, and keeping everything running. No tech team required.
              </p>
              <div className="hero-actions reveal d2">
                <a href="#contact" className="btn btn-primary">Schedule a free call <span className="arrow">→</span></a>
                <a href="#how" className="btn btn-ghost">See how it works</a>
              </div>
              <div className="hero-trust reveal d3">
                <span>Free consultation</span><span className="dot"></span>
                <span>Month-to-month</span><span className="dot"></span>
                <span>No runaround</span>
              </div>
            </div>

            <div className="reveal d2">
              <div className="hero-card">
                <div className="hero-card-head">
                  <span className="hero-card-head-icon">
                    <svg viewBox="0 0 24 24" fill="none">
                      <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span className="hero-card-title">Things we take off your plate</span>
                </div>
                <div className="task-list">
                  {[
                    'Lead intake & follow-up',
                    'Invoice processing',
                    'Data entry between apps',
                    'Customer notifications',
                    'Weekly report generation',
                    'Appointment reminders',
                  ].map((item) => (
                    <div className="task-item" key={item}>
                      <span className="chk">
                        <svg viewBox="0 0 24 24" fill="none">
                          <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                      {item}
                    </div>
                  ))}
                </div>
                <div className="task-more">+ whatever repetitive task is slowing you down</div>
              </div>
            </div>
          </div>
        </section>

        {/* TRUST STRIP */}
        <section className="trust">
          <div className="wrap trust-inner reveal">
            <span className="trust-label">Working with local businesses</span>
            <div className="trust-logos">
              <span className="logo-ph"><span className="glyph r"></span><span>Client Name</span></span>
              <span className="logo-ph"><span className="glyph"></span><span>Client Name</span></span>
              <span className="logo-ph"><span className="glyph d"></span><span>Client Name</span></span>
              <span className="logo-ph"><span className="glyph r"></span><span>Client Name</span></span>
              <span className="logo-ph"><span className="glyph"></span><span>Client Name</span></span>
            </div>
          </div>
        </section>

        {/* PROBLEM */}
        <section className="problem">
          <div className="wrap problem-grid">
            <div className="reveal">
              <span className="eyebrow">Sound familiar?</span>
              <h2>Running a business is already a full-time job. Repetitive tasks shouldn&apos;t slow you down on top of it.</h2>
              <p className="lead">Most owners know there&apos;s a better way — they just don&apos;t have the time or know-how to set it up. That&apos;s exactly what we&apos;re here for.</p>
            </div>
            <div className="pain-list">
              <div className="pain reveal d1">
                <span className="x">
                  <svg viewBox="0 0 24 24" fill="none"><path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
                </span>
                <div>
                  <div className="pt">Every new lead takes 20 steps to get into your system</div>
                  <div className="ps">Copy-pasting names, emails, and notes across tabs — every single time.</div>
                </div>
              </div>
              <div className="pain reveal d1">
                <span className="x">
                  <svg viewBox="0 0 24 24" fill="none"><path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
                </span>
                <div>
                  <div className="pt">Your tools don&apos;t talk to each other</div>
                  <div className="ps">Your CRM, inbox, invoicing, and calendar all live in separate silos.</div>
                </div>
              </div>
              <div className="pain reveal d2">
                <span className="x">
                  <svg viewBox="0 0 24 24" fill="none"><path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
                </span>
                <div>
                  <div className="pt">Following up with customers is its own full-time job</div>
                  <div className="ps">Reminders, check-ins, invoices — all done by hand, all easy to miss.</div>
                </div>
              </div>
              <div className="pain reveal d2">
                <span className="x">
                  <svg viewBox="0 0 24 24" fill="none"><path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
                </span>
                <div>
                  <div className="pt">You can&apos;t grow because you&apos;re stuck in the weeds</div>
                  <div className="ps">The same tasks that took 5 minutes now take the whole morning.</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section className="section" id="services">
          <div className="wrap">
            <div className="services-intro reveal">
              <span className="eyebrow">What we do</span>
              <h2 style={{ marginTop: '18px' }}>Three straightforward services. No fluff.</h2>
              <p className="lead" style={{ marginTop: '14px', color: 'var(--ink-soft)' }}>
                We build automations that connect your tools and run quietly in the background — so the repetitive work gets done while you focus on your business.
              </p>
            </div>

            <div className="svc-grid">
              <article className="svc reveal d1">
                <div className="svc-num">01</div>
                <span className="svc-ic">
                  <svg viewBox="0 0 24 24" fill="none">
                    <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.8" />
                    <path d="M16.5 16.5l3.5 3.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                  </svg>
                </span>
                <h3>Process Audit</h3>
                <p className="blurb">We sit down with you, learn how your business actually runs, and identify exactly where automation would save you the most time and money.</p>
                <ul>
                  <li><span className="tick"><svg viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg></span>Free 30-minute consultation</li>
                  <li><span className="tick"><svg viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg></span>Plain-English breakdown of opportunities</li>
                  <li><span className="tick"><svg viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg></span>No obligation — the plan is yours to keep</li>
                </ul>
              </article>

              <article className="svc reveal d2">
                <div className="svc-num">02</div>
                <span className="svc-ic">
                  <svg viewBox="0 0 24 24" fill="none">
                    <path d="M12 3l8 4v5c0 4.5-3.2 7.3-8 9-4.8-1.7-8-4.5-8-9V7l8-4z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
                    <path d="M9 12l2 2 4-4.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <h3>Build &amp; Deploy</h3>
                <p className="blurb">We design and build your automation workflows, connect them to the tools you already use, test everything, and deploy it reliably from day one.</p>
                <ul>
                  <li><span className="tick"><svg viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg></span>Connects to your existing apps</li>
                  <li><span className="tick"><svg viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg></span>Hosted and managed by us</li>
                  <li><span className="tick"><svg viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg></span>You can see exactly what it does</li>
                </ul>
              </article>

              <article className="svc reveal d3">
                <div className="svc-num">03</div>
                <span className="svc-ic">
                  <svg viewBox="0 0 24 24" fill="none">
                    <path d="M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
                  </svg>
                </span>
                <h3>Ongoing Support</h3>
                <p className="blurb">A simple monthly retainer keeps your automations running. We monitor them, fix anything that breaks, and update them as your business evolves.</p>
                <ul>
                  <li><span className="tick"><svg viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg></span>24/7 uptime monitoring</li>
                  <li><span className="tick"><svg viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg></span>We know before you do if something breaks</li>
                  <li><span className="tick"><svg viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg></span>Cancel any time — month-to-month</li>
                </ul>
              </article>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="section how" id="how">
          <div className="wrap">
            <div className="section-head reveal">
              <span className="eyebrow">How it works</span>
              <h2>From first conversation to first automation — in about two weeks.</h2>
              <p className="lead">No big contracts up front. We start small, prove the value, and build from there.</p>
            </div>
            <div className="steps">
              <div className="step reveal d1">
                <span className="node">1</span>
                <div className="step-line"></div>
                <h3>Free call</h3>
                <p className="stxt">We listen to how your business runs and find the spots where automation would do the most good.</p>
                <span className="stag">30 minutes · no charge</span>
              </div>
              <div className="step reveal d1">
                <span className="node">2</span>
                <div className="step-line"></div>
                <h3>Clear plan</h3>
                <p className="stxt">You get a short, plain-English breakdown of what we&apos;d build, what it connects to, and what it costs.</p>
                <span className="stag">Week 1</span>
              </div>
              <div className="step reveal d2">
                <span className="node">3</span>
                <div className="step-line"></div>
                <h3>We build it</h3>
                <p className="stxt">Thomas builds and deploys the workflows. We test them with you and make sure everything runs right.</p>
                <span className="stag">Week 1–2</span>
              </div>
              <div className="step reveal d2">
                <span className="node">4</span>
                <div className="step-line"></div>
                <h3>You&apos;re covered</h3>
                <p className="stxt">Ongoing monitoring and support on a simple monthly plan. We keep it running — you stay focused on work.</p>
                <span className="stag">Ongoing</span>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT / WHY M&T */}
        <section className="section" id="about">
          <div className="wrap why-grid">
            <div>
              <span className="eyebrow reveal">Why M&amp;T</span>
              <h2 className="reveal d1" style={{ marginTop: '18px' }}>Built by two guys who got tired of watching good businesses waste time.</h2>
              <div className="divider reveal d2"></div>
              <div className="stats">
                <div className="stat reveal d2">
                  <div className="big">400<span className="u">+ apps</span></div>
                  <div className="lbl">Apps we can connect to your workflow</div>
                  <div className="sub">Gmail, Slack, QuickBooks, Salesforce, Airtable, and hundreds more.</div>
                </div>
                <div className="stat reveal d3">
                  <div className="big">~2<span className="u"> weeks</span></div>
                  <div className="lbl">From call to first automation live</div>
                  <div className="sub">We move fast, test carefully, and deploy reliably.</div>
                </div>
                <div className="stat reveal d3">
                  <div className="big">0<span className="u"> lock-in</span></div>
                  <div className="lbl">Month-to-month pricing, always</div>
                  <div className="sub">No annual contracts. No cancellation fees. Just results.</div>
                </div>
              </div>
            </div>

            <div className="reveal d1">
              <div className="founder-card">
                <span className="eyebrow">A note from us</span>
                <p className="founder-quote">
                  &ldquo;We started M&amp;T because we watched too many good businesses spend half their week on tasks a computer could handle in seconds. We wanted to be the people who actually fixed that — practically, affordably, and without the runaround.&rdquo;
                </p>
                <div className="founder-names">
                  <div className="founder">
                    <span className="founder-name">Matthew</span>
                    <span className="founder-role">Sales &amp; Client Relations</span>
                  </div>
                  <div className="founder-divider"></div>
                  <div className="founder">
                    <span className="founder-name">Thomas</span>
                    <span className="founder-role">Technical Delivery</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section faq" id="faq">
          <div className="wrap faq-grid">
            <div className="reveal">
              <span className="eyebrow">Good questions</span>
              <h2 style={{ fontSize: 'clamp(1.8rem,3.4vw,2.5rem)', marginTop: '16px' }}>Things people ask us before they reach out.</h2>
              <p className="lead" style={{ color: 'var(--ink-soft)', marginTop: '16px' }}>Still have something on your mind? Just give Matthew a call — that&apos;s literally what he&apos;s here for.</p>
            </div>
            <div className="faq-list reveal d1">
              <div className="faq-item">
                <button className="faq-q" type="button">What exactly is workflow automation? <span className="faq-icon"></span></button>
                <div className="faq-a"><p>Workflow automation is the plumbing that connects your apps together. When something happens in one place (say, a new form submission), it automatically triggers something else — updating your spreadsheet, sending a Slack message, creating an invoice. We build those connections for you, and they run on their own from there.</p></div>
              </div>
              <div className="faq-item">
                <button className="faq-q" type="button">Do I need to understand any of the technical side? <span className="faq-icon"></span></button>
                <div className="faq-a"><p>Not at all. You describe how your business works and what&apos;s slowing you down — we handle everything else. The workflows we build are visual, so we can always show you exactly what&apos;s happening in plain language.</p></div>
              </div>
              <div className="faq-item">
                <button className="faq-q" type="button">What tools and apps can you connect? <span className="faq-icon"></span></button>
                <div className="faq-a"><p>Most common business tools are supported: Gmail, Outlook, Google Sheets, QuickBooks, Stripe, HubSpot, Salesforce, Airtable, Slack, Notion, Calendly, Typeform, and hundreds more. If you&apos;re using something specific, just ask — chances are good we can connect it.</p></div>
              </div>
              <div className="faq-item">
                <button className="faq-q" type="button">How does pricing work? <span className="faq-icon"></span></button>
                <div className="faq-a"><p>There&apos;s a one-time setup fee to design and build your automations, then a simple monthly retainer for hosting, monitoring, and support. The retainer is month-to-month — no annual contracts, no cancellation fees. We&apos;ll give you a clear number before you commit to anything.</p></div>
              </div>
              <div className="faq-item">
                <button className="faq-q" type="button">What happens if something breaks? <span className="faq-icon"></span></button>
                <div className="faq-a"><p>We monitor all client automations around the clock. In most cases, we&apos;ll know something&apos;s off before you do. Fixes are covered by the monthly retainer — you won&apos;t be chasing us down or waiting on a ticket queue.</p></div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="cta-section" id="contact">
          <div className="wrap">
            <div className="cta reveal">
              <span className="eyebrow">Ready to get started?</span>
              <h2>Let&apos;s find your first quick win.</h2>
              <p>Schedule a free 30-minute call with Matthew. We&apos;ll look at how your business runs, point out the easiest wins, and leave you with a plan — no strings attached.</p>
              <div className="cta-actions">
                <a href="#contact" className="btn btn-primary">Schedule a free call <span className="arrow">→</span></a>
                <a href="mailto:hello@mtcompany.com" className="btn btn-ghost" style={{ color: 'rgba(255,255,255,0.85)', borderColor: 'rgba(255,255,255,0.25)' }}>hello@mtcompany.com</a>
              </div>
              <p className="mini">Free · No obligation · No jargon</p>
            </div>
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="footer">
        <div className="wrap">
          <div className="footer-grid">
            <div>
              <a className="brand" href="#top">
                <div className="logo-mark" aria-hidden="true">M&amp;T</div>
                <span className="brand-name">The M<span className="amp">&amp;</span>T Company</span>
              </a>
              <p className="ftag">We help local businesses cut the busywork, connect their tools, and keep everything running — calmly.</p>
            </div>
            <div className="footer-col">
              <h5>Services</h5>
              <a href="#services">Process Audit</a>
              <a href="#services">Build &amp; Deploy</a>
              <a href="#services">Ongoing Support</a>
              <a href="#how">How it works</a>
            </div>
            <div className="footer-col">
              <h5>Company</h5>
              <a href="#about">About M&amp;T</a>
              <a href="#faq">FAQ</a>
              <a href="#contact">Schedule a call</a>
            </div>
            <div className="footer-col">
              <h5>Get in touch</h5>
              <a href="mailto:hello@mtcompany.com">hello@mtcompany.com</a>
              <a href="#contact">Book a free call</a>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© 2025 The M &amp;T Company. All rights reserved.</p>
            <div className="footer-social">
              <a href="#" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M4.98 3.5a2 2 0 11-.02 4 2 2 0 01.02-4zM3 8.98h4v12H3v-12zM9 8.98h3.8v1.64h.05c.53-1 1.83-2.05 3.77-2.05 4 0 4.74 2.64 4.74 6.07v6.34h-4v-5.62c0-1.34-.02-3.06-1.87-3.06-1.87 0-2.16 1.46-2.16 2.97v5.71H9v-12z" />
                </svg>
              </a>
              <a href="mailto:hello@mtcompany.com" aria-label="Email">
                <svg viewBox="0 0 24 24" fill="none">
                  <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.8" />
                  <path d="M4 7l8 6 8-6" stroke="currentColor" strokeWidth="1.8" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>

      <TweaksRoot />
      <Interactions />
    </>
  )
}
