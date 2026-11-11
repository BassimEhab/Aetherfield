import { Component, Input } from '@angular/core';
import { Button } from '../button/button';

@Component({
  imports: [Button],
  selector: 'app-call-to-action',
  styleUrl: './call-to-action.css',
  templateUrl: './call-to-action.html',
})
export class CallToAction {
  @Input({ required: true }) actionTitle: string = '';
  @Input({ required: true }) actionButton: string = '';
}
