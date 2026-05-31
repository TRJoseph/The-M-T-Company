import Interactions from '../components/Interactions'
import TweaksRoot from '../components/Tweaks'

export default function Home() {
  return (
    <>
      {/* NAV */}
      <header className="nav">
        <div className="nav-inner">
          <a className="brand" href="#top">
            <span className="brand-badge">M&amp;T<span className="moon crescent"></span></span>
            <span className="brand-name">The M&amp;T Company</span>
          </a>
          <ul className="nav-links">
            <li><a href="#services">Services</a></li>
            <li><a href="#how">How It Works</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#faq">FAQ</a></li>
          </ul>
          <a className="btn btn-primary nav-cta" href="#contact">Get in touch</a>
        </div>
      </header>

      <main id="top">

        {/* HERO */}
        <section className="hero">
          <div className="shell hero-grid">
            <div className="hero-copy">
              <span className="eyebrow reveal">Automation studio · Camden, SC</span>
              <h1 className="reveal d1">Stop doing it <span className="em">by hand.</span></h1>
              <p className="hero-sub reveal d2">We&apos;re Matthew and Thomas. We find the repetitive busywork quietly draining your week and build automations that connect the tools you already use — then run on their own.</p>
              <div className="hero-cta reveal d3">
                <a className="btn btn-primary" href="#contact">Schedule a free call <span className="arrow">→</span></a>
                <a className="btn btn-ghost" href="#how">See how it works</a>
              </div>
              <div className="hero-meta reveal d3">
                <span>A two-person studio</span>
                <span className="dot"></span>
                <span>Month-to-month, no lock-in</span>
              </div>
            </div>

            <div className="hero-visual reveal d2">
              <div className="hero-art" id="heroArt">
                <div className="ha-sky"></div>
                <div className="ha-skyclip">
                  <div className="ha-glow"></div>
                  <div className="ha-fan" id="haFan"></div>
                  <div className="ha-sun"></div>
                  <div className="moon-lg crescent"></div>
                </div>
                <div className="ha-water"></div>
                <div className="ha-grass" id="haGrass"></div>
                <div className="ha-arch"></div>
              </div>
            </div>
          </div>
        </section>

        {/* TRUST */}
        <section className="trust">
          <div className="shell">
            <p className="trust-label reveal">Working with local businesses across the Lowcountry</p>
            <div className="trust-logos">
              <div className="logo-slot reveal">Client Name</div>
              <div className="logo-slot reveal d1">Client Name</div>
              <div className="logo-slot reveal d2">Client Name</div>
              <div className="logo-slot reveal d3">Client Name</div>
              <div className="logo-slot reveal d4">Client Name</div>
            </div>
          </div>
        </section>

        {/* PROBLEM */}
        <section className="section problem" id="problem">
          <div className="shell">
            <div className="section-head reveal">
              <span className="eyebrow">The busywork tax</span>
              <h2>You didn&apos;t start a business to copy and paste.</h2>
              <p className="lead">Yet here you are — re-typing the same details into three apps, chasing the same follow-ups, fixing the same gaps. These are the hours we get back for you.</p>
            </div>
            <div className="problem-grid">
              <div className="pain iron-corners reveal">
                <span className="num">01</span>
                <div>
                  <h3>Repetitive manual tasks</h3>
                  <p>Copying data between spreadsheets, retyping invoices, sending the same reminders. Work a computer should be doing while you do the real thing.</p>
                </div>
              </div>
              <div className="pain iron-corners reveal d1">
                <span className="num">02</span>
                <div>
                  <h3>Tools that don&apos;t talk to each other</h3>
                  <p>Your booking app, your inbox, your accounting — all islands. Nothing flows from one to the next without someone moving it by hand.</p>
                </div>
              </div>
              <div className="pain iron-corners reveal d2">
                <span className="num">03</span>
                <div>
                  <h3>Follow-up falling through the cracks</h3>
                  <p>A lead goes cold. A review never gets asked for. A customer waits two days for a reply you meant to send. Quiet revenue, leaking out.</p>
                </div>
              </div>
              <div className="pain iron-corners reveal d3">
                <span className="num">04</span>
                <div>
                  <h3>Stuck in the weeds</h3>
                  <p>You can&apos;t grow because you&apos;re the glue holding the operation together. Every new client is more manual work, not more freedom.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section className="section services" id="services">
          <div className="shell">
            <div className="section-head centered reveal">
              <span className="eyebrow centered">What we do</span>
              <h2>Three ways to work together.</h2>
              <p className="lead">Start with a free look at your operation. Build what makes sense. Keep it humming for as long as it&apos;s useful — and not a day longer.</p>
            </div>
            <div className="svc-grid">

              <div className="svc reveal">
                <span className="svc-tag">Always free</span>
                <h3>Process Audit</h3>
                <p className="svc-price"><b>Free</b> · about 30 minutes</p>
                <p>A friendly call where we map the manual work in your week and point to the highest-value things to automate first. No pitch, no obligation.</p>
                <div className="svc-line"></div>
                <ul>
                  <li><span className="check">✦</span> We map your current workflow</li>
                  <li><span className="check">✦</span> Spot the quickest, biggest wins</li>
                  <li><span className="check">✦</span> You leave with a clear next step</li>
                </ul>
                <a className="btn btn-ghost" href="#contact">Book the audit <span className="arrow">→</span></a>
              </div>

              <div className="svc featured reveal d1">
                <span className="svc-tag">Most popular</span>
                <h3>Build &amp; Deploy</h3>
                <p className="svc-price"><b>One-time</b> setup fee</p>
                <p>We build the automation, connect it to the tools you already pay for, test it against real cases, and hand it over running. Quietly, in the background.</p>
                <div className="svc-line"></div>
                <ul>
                  <li><span className="check">✦</span> Custom-built for your workflow</li>
                  <li><span className="check">✦</span> Connected to your existing apps</li>
                  <li><span className="check">✦</span> Tested, documented, deployed</li>
                </ul>
                <a className="btn btn-primary" href="#contact">Start a build <span className="arrow">→</span></a>
              </div>

              <div className="svc reveal d2">
                <span className="svc-tag">Month to month</span>
                <h3>Ongoing Support</h3>
                <p className="svc-price"><b>Retainer</b> · monthly</p>
                <p>We watch your automations, fix anything that drifts, and adjust as your business changes. Cancel whenever — there&apos;s no lock-in, ever.</p>
                <div className="svc-line"></div>
                <ul>
                  <li><span className="check">✦</span> Monitoring &amp; proactive fixes</li>
                  <li><span className="check">✦</span> Tweaks as your needs change</li>
                  <li><span className="check">✦</span> A real person who knows your setup</li>
                </ul>
                <a className="btn btn-ghost" href="#contact">Stay covered <span className="arrow">→</span></a>
              </div>

            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="section how" id="how">
          <div className="shell">
            <div className="section-head centered reveal">
              <span className="eyebrow centered">How it works</span>
              <h2>Four unhurried steps.</h2>
              <p className="lead">No jargon, no enterprise rollout, no six-month timeline. Most clients see their first automation live within about two weeks.</p>
            </div>
            <div className="steps">
              <div className="step reveal">
                <div className="step-node">I</div>
                <h3>Free call</h3>
                <p>We talk through your week and find the busywork worth removing. Thirty minutes, no pressure.</p>
              </div>
              <div className="step reveal d1">
                <div className="step-node">II</div>
                <h3>Clear plan</h3>
                <p>You get a plain-English plan: what we&apos;ll automate, which tools we&apos;ll connect, and what it costs.</p>
              </div>
              <div className="step reveal d2">
                <div className="step-node">III</div>
                <h3>We build it</h3>
                <p>Thomas builds and tests it against your real cases. You stay in your business while we work.</p>
              </div>
              <div className="step reveal d3">
                <div className="step-node">IV</div>
                <h3>You&apos;re covered</h3>
                <p>It goes live and runs on its own. We keep an eye on it for as long as you&apos;d like us to.</p>
              </div>
            </div>
          </div>
        </section>

        {/* WHY M&T / ABOUT */}
        <section className="section why" id="about">
          <div className="shell">
            <div className="why-grid">
              <div className="why-left">
                <div className="section-head reveal">
                  <span className="eyebrow">Why M&amp;T</span>
                  <h2>Small studio. Serious about your time.</h2>
                </div>
                <div className="stats">
                  <div className="stat reveal d1">
                    <span className="big">400+</span>
                    <span className="lab"><b>Apps we can connect</b>From booking and billing to inbox, CRM, and spreadsheets.</span>
                  </div>
                  <div className="stat reveal d2">
                    <span className="big">~2 wk</span>
                    <span className="lab"><b>To your first automation</b>From the free call to something live and working.</span>
                  </div>
                  <div className="stat reveal d3">
                    <span className="big">0</span>
                    <span className="lab"><b>Lock-in, ever</b>Month-to-month support. Stay because it&apos;s working.</span>
                  </div>
                </div>
              </div>

              <div className="quote-card reveal d1">
                <span className="qmoon crescent"></span>
                <span className="qmark">&ldquo;</span>
                <blockquote>We started M&amp;T because we watched too many good businesses spend half their week on tasks a computer could handle in seconds.</blockquote>
                <div className="qby">
                  <span className="qbadge">M&amp;T</span>
                  <div>
                    <div className="qname">Matthew &amp; Thomas</div>
                    <div className="qrole">Founders, The M&amp;T Company</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section faq" id="faq">
          <div className="shell">
            <div className="faq-grid">
              <div className="section-head reveal">
                <span className="eyebrow">Good questions</span>
                <h2>The things people ask us first.</h2>
                <p className="lead">Still wondering about something? The free audit is the easiest way to get a straight answer.</p>
              </div>
              <div className="faq-list">
                <div className="faq-item reveal">
                  <button className="faq-q" type="button">What exactly is &ldquo;automation&rdquo;?<span className="ic"></span></button>
                  <div className="faq-a"><div className="faq-a-inner">It&apos;s getting your software to do repetitive work for you — moving information between apps, sending messages, updating records — without anyone clicking through it by hand. If you find yourself doing the same steps over and over, that&apos;s usually something we can automate.</div></div>
                </div>
                <div className="faq-item reveal">
                  <button className="faq-q" type="button">Do I need to understand the tech?<span className="ic"></span></button>
                  <div className="faq-a"><div className="faq-a-inner">Not at all. That&apos;s our half of the deal. You tell us how your business works in plain language; Thomas handles the wiring, and Matthew makes sure it actually fits how you operate. You just get the result.</div></div>
                </div>
                <div className="faq-item reveal">
                  <button className="faq-q" type="button">What tools do you connect?<span className="ic"></span></button>
                  <div className="faq-a"><div className="faq-a-inner">Most of the everyday ones — email and calendars, booking and scheduling, invoicing and accounting, CRMs, spreadsheets, forms, and messaging. We work across 400+ apps, so chances are the tools you already pay for will play nicely together.</div></div>
                </div>
                <div className="faq-item reveal">
                  <button className="faq-q" type="button">How does pricing work?<span className="ic"></span></button>
                  <div className="faq-a"><div className="faq-a-inner">The Process Audit is free. Build &amp; Deploy is a one-time setup fee, quoted up front once we know the scope. Ongoing Support is a flat monthly retainer, month-to-month — no contracts and no lock-in. You&apos;ll always know the number before we start.</div></div>
                </div>
                <div className="faq-item reveal">
                  <button className="faq-q" type="button">What if something breaks?<span className="ic"></span></button>
                  <div className="faq-a"><div className="faq-a-inner">If you&apos;re on Ongoing Support, we&apos;re already watching for it and usually fix things before you notice. If you&apos;re not, we&apos;re still a message away. Nothing we build is a black box — it&apos;s documented, and you&apos;re never stranded.</div></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA BANNER */}
        <section className="cta" id="contact">
          <span className="moon-deco crescent"></span>
          <div className="cta-bg"></div>
          <div className="shell inner">
            <span className="eyebrow centered reveal">Let&apos;s begin</span>
            <h2 className="reveal d1">Let&apos;s find your first quick win.</h2>
            <p className="reveal d2">A free, thirty-minute call. We&apos;ll map the busywork in your week and show you what&apos;s worth automating first — no pitch, no obligation.</p>
            <div className="cta-actions reveal d3">
              <a className="btn btn-primary" href="mailto:hello@mtcompany.com?subject=Free%20Process%20Audit">Schedule a free call <span className="arrow">→</span></a>
              <a className="cta-email" href="mailto:hello@mtcompany.com">hello@mtcompany.com</a>
            </div>
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="footer">
        <div className="shell">
          <div className="footer-top">
            <div>
              <a className="brand" href="#top">
                <span className="brand-badge">M&amp;T<span className="moon crescent"></span></span>
                <span className="brand-name">The M&amp;T Company</span>
              </a>
              <p className="footer-blurb">A two-person automation studio in the South Carolina Lowcountry. We take the busywork off your plate so you can get back to the work only you can do.</p>
            </div>
            <div>
              <h4>Services</h4>
              <ul>
                <li><a href="#services">Process Audit</a></li>
                <li><a href="#services">Build &amp; Deploy</a></li>
                <li><a href="#services">Ongoing Support</a></li>
              </ul>
            </div>
            <div>
              <h4>Company</h4>
              <ul>
                <li><a href="#how">How It Works</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#faq">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4>Get in touch</h4>
              <ul>
                <li><a href="mailto:hello@mtcompany.com">hello@mtcompany.com</a></li>
                <li><a href="#contact">Schedule a free call</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <span>© 2026 The M&amp;T Company · Camden, South Carolina</span>
            <span>Built by hand, run on its own.</span>
          </div>
        </div>
      </footer>

      <TweaksRoot />
      <Interactions />
    </>
  )
}
