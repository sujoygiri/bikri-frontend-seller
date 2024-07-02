import { Component, OnInit } from '@angular/core';
import { MenuItem } from "primeng/api";
import { MenubarModule } from "primeng/menubar";
import { ButtonModule } from "primeng/button";
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MenubarModule, ButtonModule, RouterModule, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  items: MenuItem[] | undefined;
  showSignInBtn: boolean = true;
  constructor(private router: Router) { }
  ngOnInit(): void {
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-home'
      },
      {
        label: 'Add Product',
        icon: 'pi pi-plus-circle',
        routerLink: '/add-product'
      },
      {
        label: 'Projects',
        icon: 'pi pi-search',
        items: [
          {
            label: 'Components',
            icon: 'pi pi-bolt'
          },
          {
            label: 'Blocks',
            icon: 'pi pi-server'
          },
          {
            label: 'UI Kit',
            icon: 'pi pi-pencil'
          },
          {
            label: 'Templates',
            icon: 'pi pi-palette',
            items: [
              {
                label: 'Apollo',
                icon: 'pi pi-palette'
              },
              {
                label: 'Ultima',
                icon: 'pi pi-palette'
              }
            ]
          }
        ]
      },
      {
        label: 'Contact',
        icon: 'pi pi-envelope'
      }
    ];
    this.router.events.subscribe({
      next: (value) => {
        if (value instanceof NavigationEnd) {
          (value.url === '/sign-in' || value.url === '/sign-up') ? this.showSignInBtn = false : this.showSignInBtn = true;
        }
      },
    });
  }
}
