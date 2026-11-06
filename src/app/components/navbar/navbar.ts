import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-navbar',
  styleUrl: './navbar.css',
  templateUrl: './navbar.html',
})
export class Navbar {
  public navbarLinks: string[] = ['Product', 'Journal', 'About', 'Careers', 'Get started'];

  @ViewChild('navList') navList!: ElementRef;
  public isNavbarVisable: boolean = false;
  public toogleNavbarvisablity(): void {
    this.isNavbarVisable = !this.isNavbarVisable;
  }
}
