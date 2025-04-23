import { Component, Input } from '@angular/core';
import { Cart, CartService } from '../../../services/cart/cart.service';
import { CartItemComponent } from './cart-item/cart-item.component';
import { FormatPricePipe } from '../../../pipes/format-price/format-price.pipe';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart',
  imports: [CartItemComponent, FormatPricePipe, CommonModule],
  templateUrl: './cart.component.html',
})
export class CartComponent {
  @Input() cart: Cart = { sum: 0, items: [] };
}
