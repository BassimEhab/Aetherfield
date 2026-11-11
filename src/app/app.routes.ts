import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: 'product', pathMatch: 'full' },
    { path: 'product', loadComponent: () => import('./components/home/home').then((c) => c.Home) },
    { path: 'journal', loadComponent: () => import('./components/journal/journal').then((c) => c.Journal) },
    { path: 'about', loadComponent: () => import('./components/about/about').then((c) => c.About) },
    { path: 'careers', loadComponent: () => import('./components/careers/careers').then((c) => c.Careers) },
    { path: 'careers/:id', loadComponent: () => import('./components/career/career').then((c) => c.Career) },
    { path: 'articles/:id', loadComponent: () => import('./components/article/article').then((c) => c.Article) },
];
