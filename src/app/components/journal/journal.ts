import { Component, inject } from '@angular/core';
import { ArticleService } from '../../services/articleService';
import { CallToAction } from '../call-to-action/call-to-action';

@Component({
  imports: [CallToAction],
  selector: 'app-journal',
  styleUrl: './journal.css',
  templateUrl: './journal.html',
})
export class Journal {
  protected articleService = inject(ArticleService);
}
