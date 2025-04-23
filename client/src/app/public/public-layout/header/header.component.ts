import { Component } from '@angular/core';
import { SearchInputComponent } from './search-input/search-input.component';

@Component({
  selector: 'app-header',
  imports: [SearchInputComponent],
  templateUrl: './header.component.html'
})
export class HeaderComponent {

}
