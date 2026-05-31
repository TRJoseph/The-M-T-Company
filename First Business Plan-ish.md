## Concept

Help local and larger businesses integrate workflow automation tools (primarily n8n) into their operations. Identify inefficiencies in their processes, design automated workflows, deploy them, and provide ongoing support.

[[Notes For Matthew to Read]]

## Team Split

- **Matthew**: Sales, client relationships, business development, lead generation
- **Thomas**: Technical delivery — workflow design, deployment, hosting, maintenance

## Core Service

- Consult with businesses to understand their processes and identify automation opportunities
- Build and deploy n8n workflows tailored to their needs
- Provide ongoing monitoring, maintenance, and support (retainer model)

## Why n8n Workflows (Not Custom Software)

- **Recurring revenue**: Deliver workflows + charge monthly retainer for support/monitoring
- **Maintainability**: Visual workflows are easier to debug, hand off, and modify than custom codebases
- **Scalability**: Don't need to maintain a separate codebase per client
- **Speed**: Faster to prototype and deploy than building from scratch
- **Client transparency**: Clients can see what the workflow does visually

Custom compiled programs only make sense for very narrow, high-volume, performance-critical tasks. Even then, prototype in n8n first to validate.

## Value Proposition

- Understanding their business process
- Diagnosing where automation saves them time and money
- Building it correctly and reliably
- Making sure it keeps running

## Revenue Model

- **Setup fee**: One-time charge for workflow design and deployment
- **Monthly retainer**: Ongoing monitoring, maintenance, updates, and support
- **Hosting fee**: Passed through or bundled into retainer

## Available Credits (YC AI Student Deal + Other)

- **$10,000** — Microsoft Azure
- **$10,000** — AWS
- **$500** — Anthropic API
- **$2,500** — OpenAI API
- **$720** — Cursor

Azure and AWS credits cover hosting costs for a long time — no upfront infrastructure spend needed. AI API credits (Anthropic, OpenAI) open the door to building AI-powered workflows for clients (e.g., document processing, summarization, chatbots) without eating into margins early on.

## Hosting Strategy

### Don't Host on Personal Hardware

Even for the first client, use a VPS. A desktop is unreliable — sleep mode, power loss, reboots, no uptime guarantee. A bad first impression with early clients kills referrals.

### Starting Out (1-5 Clients)

- Use Azure or AWS credits — effectively free hosting to start
- Docker Compose with one n8n container per client
- Each client gets their own subdomain: `clientname.yourcompany.com`
- Reverse proxy with Caddy (auto SSL) or Nginx
- SQLite or Postgres per instance
- Fallback to cheap VPS (Hetzner, DigitalOcean) once credits run out if margins don't justify Azure/AWS pricing

### Growing (5-15+ Clients)

- Set Docker resource limits (CPU/memory) per container to isolate clients
- Move to a bigger VPS or multiple VPSes as needed
- Consider Kubernetes only when the complexity is justified by client count
- Don't over-engineer early

### Enterprise/Larger Clients

- Some may want n8n deployed on their own infrastructure (compliance, data privacy)
- Have a playbook ready for this — charge a premium for it

## Backups (Set Up From Day One)

- Automate daily Postgres database backups
- Export all workflows as JSON via the n8n API on a cron job
- Push backups to S3 (covered by AWS credits) or Backblaze B2
- Goal: restore any client instance from scratch in under an hour

## Monitoring

- Use Uptime Kuma (free, self-hosted) to monitor all client instances
- Know when something breaks before the client does

## TODO / Figure Out Later

- Pricing structure (setup fees, retainer rates)
- Legal (contracts, liability, SLAs)
- Branding and web presence
- Client onboarding process
- Which specific integrations to specialize in
- Whether to resell n8n Cloud for certain clients vs. always self-host
