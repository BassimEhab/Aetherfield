import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { ArticleService } from '../../services/articleService';
import { ActivatedRoute } from '@angular/router';

@Component({
  imports: [],
  selector: 'app-article',
  styleUrl: './article.css',
  templateUrl: './article.html',
})
export class Article implements OnInit {
  private articleService = inject(ArticleService);
  private route = inject(ActivatedRoute);

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam !== null) {
      this.articleId.set(Number(idParam));
    }
    console.log(idParam);
  }

  private articleId = signal<number | null>(null);
  public article = computed(() => {
    return this.articleService.articles().find((art) => art.id === this.articleId())
  });
}
