import { Component, inject } from '@angular/core';
import { ArticleService } from '../../services/articleService';
import { CallToAction } from '../call-to-action/call-to-action';
import { RouterLink } from '@angular/router';

@Component({
  imports: [CallToAction, RouterLink],
  selector: 'app-journal',
  styleUrl: './journal.css',
  templateUrl: './journal.html',
})
export class Journal {
  protected articleService = inject(ArticleService);
}
