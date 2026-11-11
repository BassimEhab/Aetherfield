import { Component, inject } from '@angular/core';
import { Button } from '../button/button';
import { TeamService } from '../../services/teamService';
import { CallToAction } from '../call-to-action/call-to-action';

@Component({
  imports: [Button, CallToAction],
  selector: 'app-about',
  styleUrl: './about.css',
  templateUrl: './about.html',
})
export class About {
  protected teamService = inject(TeamService);

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
