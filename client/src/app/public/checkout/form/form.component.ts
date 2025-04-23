import { Component, Input } from '@angular/core';
import { FormatPricePipe } from '../../../pipes/format-price/format-price.pipe';
import { CartService } from '../../../services/cart/cart.service';

@Component({
  selector: 'app-form',
  imports: [FormatPricePipe],
  templateUrl: './form.component.html',
})
export class FormComponent {
  @Input() sum: number = 0;
}
