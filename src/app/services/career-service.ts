import { Service, signal } from '@angular/core';
import { ICareer } from '../interfaces/icareer';

@Service()
export class CareerService {
    private careersSignal = signal<ICareer[]>([
        {
            id: 1,
            title: 'UX Designer',
            roleType: 'Contract',
            location: 'San Francisco, CA',
            shortDescription: 'Shape the tools that drive climate intelligence. You’ll lead cross-functional teams to build thoughtful, scalable solutions for sustainability-forward organizations.',
            jobDescription: [
                {
                    title: 'Company description',
                    body: 'At Aetherfield, we build software that empowers companies to lead with climate accountability. Our platform helps sustainability and operations teams make sense of complex environmental data—transforming emissions, waste, and energy metrics into measurable, meaningful action. We’re a mission-driven team of technologists, designers, and scientists working to accelerate the shift toward a low-carbon future.',
                },
                {
                    title: 'About the role',
                    body: 'As a UX Designer at Aetherfield, you’ll help turn raw climate data into clear, confident decision-making tools. You’ll design end-to-end experiences that make complex systems feel approachable—shaping everything from data visualization to system flows to interaction patterns. Your work will help enterprise users feel informed, empowered, and aligned in their climate action.',
                },
                {
                    title: 'Requirements',
                    body: '3+ years of experience designing for web-based products or platforms\nPortfolio that demonstrates systems thinking, design craft, and user empathy\nExperience designing data-dense interfaces or enterprise tools\nStrong skills in Figma (or equivalent), plus familiarity with accessible design practices\nAbility to partner closely with product, data, and engineering teams\nCuriosity about climate systems and care for usability in high-stakes workflows',
                },
                {
                    title: 'Company benefits',
                    body: 'This is a contract position and does not include employee benefits. However, you’ll work closely with our core team, have flexible hours, and contribute meaningfully to high-impact climate work alongside mission-driven collaborators.',
                },
            ],
        },
        {
            id: 2,
            title: 'Data Scientist',
            roleType: 'Full-time',
            location: 'Denver, CO',
            shortDescription: 'Help build the intelligence layer for climate action. You\'ll turn complex sustainability data into clear, actionable insights for enterprise teams.',
            jobDescription: [
                {
                    title: 'Company description',
                    body: 'At Aetherfield, we build software that empowers companies to lead with climate accountability. Our platform helps sustainability and operations teams make sense of complex environmental data—transforming emissions, waste, and energy metrics into measurable, meaningful action. We\'re a mission- driven team of technologists, designers, and scientists working to accelerate the shift toward a low - carbon future.',
                },
                {
                    title: 'About the role',
                    body: 'As a Data Scientist at Aetherfield, you\'ll help shape the analytical engine behind our platform.You\'ll collaborate with product and engineering teams to design models that interpret environmental impact, forecast future trends, and uncover actionable insights for our customers. Your work will directly influence how companies plan, report, and act on their sustainability strategies.',
                },
                {
                    title: 'Requirements',
                    body: '3+ years of experience in data science or applied analytics (Python, SQL, etc.)\nExperience working with climate, sustainability, or supply chain datasets is a plus\nStrong foundation in statistics and data modeling\nAbility to communicate complex insights clearly to both technical and non-technical teams\nCuriosity, clarity, and care in how you approach messy data\nPassion for solving real-world problems with purpose and precision',
                },
                {
                    title: 'Company benefits',
                    body: 'Competitive salary and equity options\nFlexible, hybrid work environment\nGenerous PTO and paid volunteer days\nAnnual sustainability stipend\nTeam offsites and climate-focused retreats\nA mission-first culture that values clarity, impact, and integrity',
                },
            ],
        },
        {
            id: 3,
            title: 'Product Manager',
            roleType: 'Part-time',
            location: 'Seattle, WA',
            shortDescription: 'Shape the tools that drive climate intelligence. You\'ll lead cross-functional teams to build thoughtful, scalable solutions for sustainability-forward organizations.',
            jobDescription: [
                {
                    title: 'Company description',
                    body: 'At Aetherfield, we build software that empowers companies to lead with climate accountability. Our platform helps sustainability and operations teams make sense of complex environmental data—transforming emissions, waste, and energy metrics into measurable, meaningful action. We\'re a mission-driven team of technologists, designers, and scientists working to accelerate the shift toward a low-carbon future.',
                },
                {
                    title: 'About the role',
                    body: 'As a Product Manager at Aetherfield, you\'ll define and drive the roadmap for climate intelligence tools used by leading sustainability teams. You\'ll work closely with engineering, design, and customers to turn complex workflows into intuitive, impactful solutions. From shaping product strategy to refining launch details, your work will guide how enterprises operationalize their climate goals.',
                },
                {
                    title: 'Requirements',
                    body: '5+ years of experience in product management for SaaS or data platforms\nStrong customer instincts with a track record of shipping thoughtful, user-centered products\nAbility to translate complex problems into clear product requirements\nFamiliarity with sustainability, climate tech, or enterprise reporting systems is a plus\nExcellent collaboration and communication skills\nDrive to work on mission-aligned technology that moves the needle',
                },
                {
                    title: 'Company benefits',
                    body: 'Competitive salary and equity options\nFlexible, hybrid work environment\nGenerous PTO and paid volunteer days\nAnnual sustainability stipend\nTeam offsites and climate-focused retreats\nA mission-first culture that values clarity, impact, and integrity',
                },
            ],
        },
    ]);

    public careers = this.careersSignal.asReadonly();
}
