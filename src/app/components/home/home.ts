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
}
