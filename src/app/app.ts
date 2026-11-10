import { Component, signal } from '@angular/core';
import { Navbar } from './components/navbar/navbar';
import { Home } from './components/home/home';
import { Footer } from './components/footer/footer';

@Component({
  imports: [Navbar, Home, Footer],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App { }
