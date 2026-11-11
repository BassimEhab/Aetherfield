import { Component, inject } from '@angular/core';
import { Button } from '../button/button';
import { CareerService } from '../../services/career-service';
import { RouterLink } from '@angular/router';

@Component({
  imports: [Button, RouterLink],
  selector: 'app-careers',
  styleUrl: './careers.css',
  templateUrl: './careers.html',
})
export class Careers {
  private careerService = inject(CareerService);
  public careers = this.careerService.careers();
}
