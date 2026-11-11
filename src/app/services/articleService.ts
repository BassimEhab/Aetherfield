import { Service, signal } from '@angular/core';
import { IArticles } from '../interfaces/iarticles';

@Service()
export class ArticleService {
    private articlesSignal = signal<IArticles[]>([
        {
            id: 1,
            imgSrc: '/article1.avif',
            title: 'How to Build a Climate-Ready Data Stack',
            category: 'Insights', duration: '4 min',
            subTitle: 'A practical guide for sustainability teams on integrating emissions, waste, and energy data into modern workflows.',
            intro: 'Climate action is only as strong as the data that informs it. But most data stacks weren\’t designed with emissions, \
             supply chains, or climate modeling in mind. Teams are often stuck retrofitting existing systems or relying on brittle workarounds \
              to generate insights. It\’s time to rethink our infrastructure—starting with the foundation.',
            body: [
                {
                    sectionTitle: 'Built for Another Era',
                    sectionBody: 'Most data infrastructures were built to optimize for sales, user growth, or cost—not carbon. This creates friction when sustainability teams try to source emissions data from systems that weren\’t designed to capture it. Without foundational visibility, even basic reporting becomes a manual, error-prone task. The result? Delays, duplications, and disconnects.'
                },
                {
                    sectionTitle: 'Bridging the Gaps',
                    sectionBody: 'Emissions data lives everywhere—and nowhere. From procurement software to building sensors, critical signals are often siloed across vendors, formats, or departments. The first step to a climate-ready stack is connection: mapping where relevant data lives, how it\’s structured, and where the friction points are in accessing it consistently.'
                },
                {
                    sectionTitle: 'Stack With Strategy',
                    sectionBody: 'A modern climate stack isn\’t just a bundle of tools—it\’s an integrated system that mirrors how your business actually operates. This means prioritizing interoperability, aligning metrics across platforms, and investing in foundational data governance. Tools alone won\’t solve emissions blind spots—strategy will.'
                },
                {
                    sectionTitle: 'Bake in Flexibility',
                    sectionBody: 'Regulatory frameworks, emissions factors, and supplier data are constantly evolving. Your data stack should too. That means designing for modularity, version control, and extensibility. Future-proofing your system is less about predicting what\’s next and more about building with change in mind.'
                },
                {
                    sectionTitle: 'From Stack to Story',
                    sectionBody: 'At the end of the day, data infrastructure is only valuable if it drives action. A climate-ready stack enables teams to monitor progress, identify trade-offs, and make informed decisions at speed. With the right foundations in place, sustainability becomes more than a report—it becomes a capability.'
                }
            ]
        },
        {
            id: 2,
            imgSrc: '/article2.avif',
            title: 'Sustainability Isn\'t a Side Project: Making Impact Operational',
            category: 'Strategy',
            duration: '7 min',
            subTitle: 'Why climate goals belong in your core roadmap—not just in the annual ESG report.',
            intro: 'Too often, sustainability lives on the edge of the org chart—under-resourced, reactive, \
            and disconnected from the core business. But real impact isn\’t an initiative, it\’s an operating principle.\
             From product decisions to procurement flows, we\’ll explore what it takes to embed sustainability into the systems that shape everyday work.',
            body: [
                {
                    sectionTitle: 'The Risk of Isolation',
                    sectionBody: 'When sustainability is framed as a special project, it stays optional. It doesn’t scale, and it rarely survives resource cuts. Real impact demands more than executive sponsorship or a glossy strategy deck—it requires integration into the systems that run the business.'
                },
                {
                    sectionTitle: 'Connect to Core Workflows',
                    sectionBody: 'The most successful sustainability programs live inside decision-making, not adjacent to it. That means embedding carbon data in procurement reviews, emissions factors in product roadmaps, and impact metrics in business KPIs. Alignment isn’t just helpful—it’s how things get done.'
                },
                {
                    sectionTitle: 'Mind the Gaps',
                    sectionBody: 'Even teams with good intentions can fall into operational gaps. Sustainability may be owned by one team, but its success hinges on others—like finance, legal, ops, and product—adopting the same standards and workflows. Clear roles, shared tooling, and open feedback loops close the gap between ambition and execution.'
                },
                {
                    sectionTitle: 'Systems Over Sprints',
                    sectionBody: 'Impact doesn’t come from one-off campaigns. It comes from systems that make the right choice the easy choice—again and again. Whether through automation, governance, or smart defaults, sustainability needs to show up where decisions are made, not just where reports are written.'
                },
                {
                    sectionTitle: 'Make It Stick',
                    sectionBody: 'Operationalizing sustainability means designing for durability. It means building programs that don’t require daily heroics to sustain and that evolve with the business over time. When impact becomes part of how work works, momentum follows.'
                }
            ]
        },
        {
            id: 3,
            imgSrc: '/article3.avif',
            title: 'Inside the Aetherfield Model: How We Turn Data Into Action',
            category: 'Insights',
            duration: '5 min',
            subTitle: 'A behind-the-scenes look at our platform logic, system architecture, and sustainability reasoning.',
            intro: 'Data is everywhere, but turning it into meaningful climate action takes more than dashboards. \
            The Aetherfield Model is our response to the noise—a systems-based approach that connects data, decision-making, \
             and delivery. In this piece, we break down how the model works, and why clarity beats complexity every time.',
            body: [
                {
                    sectionTitle: 'From Signal to Strategy',
                    sectionBody: 'Sustainability teams are overwhelmed with inputs—from sensor data to survey results to supplier estimates. The Aetherfield Model starts with organizing that noise into coherent signals, aligning teams around a shared understanding of what\'s true, what matters, and where change is possible.'
                },
                {
                    sectionTitle: 'Build for Real-Time Alignment',
                    sectionBody: 'Static reports quickly go stale. Instead, the model favors a living system of metrics, alerts, and dashboards that support decision-making in real time. That means connecting teams not just to the data—but to each other. Context travels faster when systems are designed to carry it.'
                },
                {
                    sectionTitle: 'Centered on Causality',
                    sectionBody: 'Most models focus on correlation. We focus on causality. Aetherfield maps emissions to decisions—showing not just what happened, but why. Whether it\'s a procurement policy driving Scope 3 emissions or a delivery route inflating Scope 1, the model surfaces cause, not just consequence.'
                },
                {
                    sectionTitle: 'Designed to Evolve',
                    sectionBody: 'Climate strategy isn\'t static, and neither is the Aetherfield Model. As standards evolve and business conditions shift, the model updates to reflect new realities. This keeps teams responsive and grounded, without having to rebuild from scratch every quarter.'
                },
                {
                    sectionTitle: 'From Model to Momentum',
                    sectionBody: 'The value of a model isn\'t in its elegance—it\'s in what it unlocks. With Aetherfield, teams don\'t just analyze—they act. When data, decisions, and direction are tightly aligned, momentum becomes measurable.'
                }
            ]
        },
        {
            id: 4,
            imgSrc: '/article4.avif',
            title: 'From Spreadsheets to Systems: The Evolution of Climate Reporting',
            category: 'Tooling',
            duration: '6 min',
            subTitle: 'Why legacy tools aren\’t enough—and what the next generation of reporting looks like.',
            intro: 'The first wave of climate reporting was built in spreadsheets—manual, patchy, and often siloed. \
             But as expectations rise, so does the need for rigor, scale, and repeatability. We\’re tracing the journey \
              from reactive carbon tracking to integrated, audit-ready systems that support real-time insight and strategic decisions.',
            body: [
                {
                    sectionTitle: 'Born in Excel',
                    sectionBody: 'In the early days, climate reporting was an exercise in scrappiness. Teams pulled together fragmented data from across the business, stitched it into spreadsheets, and hoped it would hold up under scrutiny. But what worked at pilot scale doesn\'t scale.'
                },
                {
                    sectionTitle: 'The Trust Gap',
                    sectionBody: 'As reporting grew more important—to investors, regulators, and customers—the cracks began to show. Manual processes introduced errors. Inconsistent methods made year-over-year comparisons unreliable. Spreadsheets weren\'t just inefficient—they undermined trust.'
                },
                {
                    sectionTitle: 'Enter the Platform Era',
                    sectionBody: 'Modern sustainability teams are shifting to purpose-built platforms. These systems automate data ingestion, standardize calculations, and offer controls for audit-readiness. More importantly, they allow teams to focus on interpretation and strategy—not just reconciliation.'
                },
                {
                    sectionTitle: 'Build Once, Report Often',
                    sectionBody: 'The evolution isn\'t just about tools—it\'s about process. Strong reporting systems create reusable infrastructure: central data sources, shared assumptions, and templated disclosures. That infrastructure makes reporting faster, easier, and more resilient.'
                },
                {
                    sectionTitle: 'From Reporting to Readiness',
                    sectionBody: 'When reporting is treated as an outcome, it\'s a burden. When treated as infrastructure, it becomes an advantage. Organizations with robust systems can respond to new standards, evolving regulations, and stakeholder questions with confidence—not scramble.'
                }
            ]
        },
        {
            id: 5,
            imgSrc: '/article5.avif',
            title: 'Carbon Accounting: Myths, Models, and Must-Haves',
            category: 'Tooling',
            duration: '6 min',
            subTitle: 'Debunking common assumptions and offering a framework for getting it right.',
            intro: 'Carbon accounting is no longer a “nice-to-have” for mission-driven organizations—it\’s  \
            a strategic necessity. But while awareness has grown, clarity hasn\’t always followed. Between evolving standards, \
             patchy data, and inconsistent terminology, many teams are still unsure where to begin, what\’s required, or how \
             to do it well.Let\’s clear the fog.',
            body: [
                {
                    sectionTitle: 'The Confusion Behind the Numbers',
                    sectionBody: 'Carbon accounting has quickly become a cornerstone of climate strategy—but it\'s also one of the most misunderstood. As organizations race to report emissions, misconceptions often lead to missteps. From overestimating data requirements to underestimating system design, many teams are navigating without a clear map. Without demystifying the process, even well-intentioned efforts can stall or steer in the wrong direction.'
                },
                {
                    sectionTitle: 'It\'s Not Just About the Math',
                    sectionBody: 'One persistent myth is that carbon accounting is purely a technical task. In reality, it\'s a cross-functional process that requires collaboration across finance, operations, procurement, and product teams. Technical accuracy matters, but organizational alignment is what makes carbon data useful—not just reportable. Treating it as a shared responsibility sets the foundation for action—not just analysis.'
                },
                {
                    sectionTitle: 'There\'s No Universal Template',
                    sectionBody: 'Another common trap is the belief that a one-size-fits-all model exists. Effective carbon accounting needs to reflect your business model, industry, and maturity level. Whether you\'re estimating Scope 3 emissions or integrating real-time data from suppliers, the right approach balances ambition with feasibility. Customization isn\'t a compromise—it\'s a prerequisite for relevance.'
                },
                {
                    sectionTitle: 'Build a Framework That Scales',
                    sectionBody: 'To navigate the complexity, every team needs a framework. That includes a shared vocabulary, clear boundaries between scopes, and an agreed-upon method for prioritizing data sources. A strong model helps teams scale their efforts while maintaining credibility and auditability. Consistency across teams and time zones makes scaling possible without sacrificing integrity.'
                },
                {
                    sectionTitle: 'Turn Data Into Decisions',
                    sectionBody: 'Ultimately, carbon accounting is not just about reporting past impact—it\'s about informing future decisions. With the right mindset and foundation, organizations can turn their carbon data into a strategic asset, enabling smarter trade-offs, stronger compliance, and more meaningful progress. When embedded into business rhythms, carbon data becomes not just a metric, but a driver of momentum.'
                }
            ]
        },
        {
            id: 6,
            imgSrc: 'article6.avif',
            title: 'Seeing Clearly: Designing Feedback Loops for Sustainable Growth',
            category: 'Strategy',
            duration: '4 min',
            subTitle: 'Building responsive systems that keep sustainability strategy adaptive and actionable.',
            intro: 'Climate strategy isn\’t static—it\’s dynamic, iterative, and shaped by feedback. \
             Yet many sustainability teams operate without the tools to observe, learn, and adapt in real time.\
              To grow sustainably, organizations need loops, not lines. Let\’s explore how reflection systems can \
              unlock smarter, faster, more resilient progress.',
            body: [
                {
                    sectionTitle: 'The Loop Advantage',
                    sectionBody: 'Progress doesn\'t come from acting once—it comes from learning continuously. Feedback loops create a rhythm of observe, reflect, adjust. Without them, climate programs risk drifting off course or missing opportunities to scale what\'s working.'
                },
                {
                    sectionTitle: 'Make Reflection Measurable',
                    sectionBody: 'You can\'t improve what you can\'t observe. Effective loops start with instrumentation—defining clear metrics, setting thresholds, and creating space to interpret results. Loops thrive when reflection is structured, not just anecdotal.'
                },
                {
                    sectionTitle: 'Close the Gap Between Action and Insight',
                    sectionBody: 'Too often, insights arrive long after decisions are made. By embedding sensors, alerts, and review rituals directly into business systems, organizations can respond in real time—not retroactively. The faster the loop, the faster the progress.'
                },
                {
                    sectionTitle: 'Design for Participation',
                    sectionBody: 'Feedback loops aren\'t just for analysts—they\'re for everyone. Create pathways for frontline employees, customers, and partners to contribute insights. When everyone has a seat at the table, blind spots shrink and ownership grows.'
                },
                {
                    sectionTitle: 'Momentum Through Awareness',
                    sectionBody: 'Clarity fuels motivation. When teams can see the impact of their work—and where they can improve—they engage more deeply. Feedback loops don\'t just optimize outcomes—they build a culture of continuous progress.'
                }
            ]
        }
    ]);
    public articles = this.articlesSignal.asReadonly();
}
