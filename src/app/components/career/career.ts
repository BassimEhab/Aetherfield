import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { CareerService } from '../../services/career-service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Button } from '../button/button';
import { CallToAction } from '../call-to-action/call-to-action';

@Component({
  imports: [RouterLink, Button, CallToAction],
  selector: 'app-career',
  styleUrl: './career.css',
  templateUrl: './career.html',
})
export class Career implements OnInit {
  ngOnInit(): void {
    const pathId = this.router.snapshot.paramMap.get('id');
    if (pathId !== null) {
      this.careerId.set(Number(pathId));
    }
  }
  private careerService = inject(CareerService);
  private router = inject(ActivatedRoute);
  private careerId = signal<number | null>(null);

  public career = computed(() => {
    return this.careerService.careers().find((c) => c.id === this.careerId());
  })
}
