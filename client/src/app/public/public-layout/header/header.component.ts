import { Component } from '@angular/core';
import { SearchInputComponent } from './search-input/search-input.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [SearchInputComponent, RouterLink],
  templateUrl: './header.component.html'
})
export class HeaderComponent {

}
