import { Component, signal } from '@angular/core';
import { Navbar } from './components/navbar/navbar';
import { Footer } from './components/footer/footer';
import { RouterOutlet } from '@angular/router';

@Component({
  imports: [Navbar, Footer, RouterOutlet],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App { }
