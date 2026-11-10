import { Component } from '@angular/core';
import { CallToAction } from '../call-to-action/call-to-action';

@Component({
  imports: [CallToAction],
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

  public articles: {
    imgSrc: string,
    title: string,
    category: string,
    duration: string,
  }[] = [
      { imgSrc: '/article1.avif', title: 'How to Build a Climate-Ready Data Stack', category: 'Insights', duration: '4 min' },
      { imgSrc: '/article2.avif', title: 'Sustainability Isn\'t a Side Project: Making Impact Operational', category: 'Strategy', duration: '7 min' },
      { imgSrc: '/article3.avif', title: 'Inside the Aetherfield Model: How We Turn Data Into Action', category: 'Insights', duration: '5 min' },
    ]
}
