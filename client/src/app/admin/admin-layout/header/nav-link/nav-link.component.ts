import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-nav-link',
  imports: [RouterModule, CommonModule],
  templateUrl: './nav-link.component.html',
})
export class NavLinkComponent {
  @Input() label: string = '';
  @Input() href: string = '';

  constructor(private router: Router) {}

  isActive(path: string): boolean {
    return this.router.url === path;
  }
}
