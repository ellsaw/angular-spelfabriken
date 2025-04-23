import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductForDetails } from '../../types/PublicProducts';
import { PublicService } from '../../services/public/public.service';
import { CommonModule } from '@angular/common';
import { FormatPricePipe } from '../../pipes/format-price/format-price.pipe';
import { RelatedCarouselComponent } from './related-carousel/related-carousel.component';
import { CartService } from '../../services/cart/cart.service';

@Component({
  selector: 'app-product-details',
  imports: [CommonModule, FormatPricePipe, RelatedCarouselComponent],
  templateUrl: './product-details.component.html',
})
export class ProductDetailsComponent {

  constructor(private route: ActivatedRoute, private router: Router , private publicService: PublicService, private cartService: CartService) {}

  product: ProductForDetails = {} as ProductForDetails;
  isInCart: boolean = false;

  fetchProduct(slug: string){
    this.publicService.getForProductDetails(slug).subscribe({
      next: (data: ProductForDetails) => {
        this.product = data
        this.isInCart = this.cartService.checkIfInCart(this.product.id)
      },
      error: () => { this.router.navigate(['/']); }
    });
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const slug = params.get('slug');

      if(!slug){
        this.router.navigate(['/'])
        return;
      } 
      
      this.fetchProduct(slug);
    })
  }

  addToCart(): void {
    if(!this.product.id || (!this.product.price && !this.product.campaign_price)) return;

    this.cartService.addToCart(this.product.id, this.product.campaign_price || this.product.price)

    this.isInCart = true;
  }
}
