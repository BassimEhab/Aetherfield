import { Component, Input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-button',
  styleUrl: './button.css',
  templateUrl: './button.html',
})
export class Button {
  @Input({ required: true }) buttonText: string = '';
  @Input() hideDot: boolean = true;
}
