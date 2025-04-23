import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProductForCard } from '../../../../types/PublicProducts';
import { PublicService } from '../../../../services/public/public.service';
import { CommonModule } from '@angular/common';
import { FormatPricePipe } from '../../../../pipes/format-price/format-price.pipe';
import { RouterLink } from '@angular/router';
import { CartService } from '../../../../services/cart/cart.service';

@Component({
  selector: 'app-cart-item',
  imports: [CommonModule, FormatPricePipe, RouterLink],
  templateUrl: './cart-item.component.html',
})
export class CartItemComponent {
  @Input() id: number | null = null;
  @Input() quantity: number = 1;

  product: ProductForCard = null as unknown as ProductForCard;

  constructor(private publicService: PublicService, private cartService: CartService) {}

  fetchProduct(){
    if(!this.id) return;

    this.publicService.getForCart(this.id).subscribe((data: ProductForCard) => this.product = data)
  }

  ngOnInit(){
    this.fetchProduct()
  }

  increment(){
    this.cartService.increaseQuantity(this.product.id, this.product.campaign_price || this.product.price)
  }

  decrement(){
    this.cartService.decreaseQuantity(this.product.id, this.product.campaign_price || this.product.price)
  }
  removeFromCart(){
    this.cartService.removeFromCart(this.product.id, this.product.campaign_price || this.product.price)
  }

}
