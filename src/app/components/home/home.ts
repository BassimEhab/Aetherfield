import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home {
  public features: {
    id: string,
    feature: string,
    description: string,
  }[] = [
      { id: '001', feature: 'Track', description: 'Emissions, energy, and waste across your value chain' },
      { id: '002', feature: 'Model', description: 'Forecast performance and goal alignment' },
      { id: '003', feature: 'Report', description: 'Generate ESG disclosures, automate frameworks' },
      { id: '004', feature: 'Act', description: 'Surface insights and operational next steps' }
    ]

  public cards: {
    icon: string,
    title: string,
    description: string,
  }[] = [
      { icon: 'pi pi-chart-pie', title: 'Clarity drives action', description: 'We believe better decisions start with better data—measured, visible, and trusted.' },
      { icon: 'pi pi-globe', title: 'Sustainability is a systems problem', description: 'We build tools that help teams connect the dots between operations, impact, and accountability.' },
      { icon: 'pi pi-arrow-circle-right', title: 'Progress over perfection', description: 'We support real-world momentum—helping organizations move from ambition to measurable change.' }
    ]
}
