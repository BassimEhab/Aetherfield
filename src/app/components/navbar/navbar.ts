import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  imports: [RouterLink],
  selector: 'app-navbar',
  styleUrl: './navbar.css',
  templateUrl: './navbar.html',
})
export class Navbar {
  public navbarLinks = [
    { label: 'Product', path: '/product' },
    { label: 'Journal', path: '/journal' },
    { label: 'About', path: '/about' },
    { label: 'Careers', path: '/careers' },
  ];
  @ViewChild('navList') navList!: ElementRef;
  public isNavbarVisable: boolean = false;
  public toogleNavbarvisablity(): void {
    this.isNavbarVisable = !this.isNavbarVisable;
  }
}
