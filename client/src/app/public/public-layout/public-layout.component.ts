import { Component } from '@angular/core';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-public-layout',
  imports: [FooterComponent, HeaderComponent, RouterOutlet],
  templateUrl: './public-layout.component.html',
})
export class PublicLayoutComponent {

}
