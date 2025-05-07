import { Component } from '@angular/core';
import { CartComponent } from './cart/cart.component';
import { FormComponent } from './form/form.component';
import { Cart, CartService } from '../../services/cart/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  imports: [CartComponent, FormComponent],
  templateUrl: './checkout.component.html',
})
export class CheckoutComponent {
  cart: Cart = { sum: 0, items: [] };

  constructor(private cartService: CartService, private router: Router) {}

  ngOnInit(){
    
    this.cartService.cartChange.subscribe(() => {
      this.handleCartChange();
    });

    this.cart = this.cartService.getCart();

    if(this.cart.items.length === 0) this.router.navigate(['/'])
  }

  handleCartChange() {
    this.cart = this.cartService.getCart();

    if(this.cart.items.length === 0) this.router.navigate(['/'])
  }
}
