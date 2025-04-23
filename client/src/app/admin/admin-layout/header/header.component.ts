import { Component } from '@angular/core';
import { NavLinkComponent } from './nav-link/nav-link.component';

@Component({
  selector: 'app-header',
  imports: [NavLinkComponent],
  templateUrl: './header.component.html',
})
export class HeaderComponent {

}
