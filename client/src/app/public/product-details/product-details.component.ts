import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductForDetails } from '../../types/PublicProducts';
import { PublicService } from '../../services/public/public.service';
import { CommonModule } from '@angular/common';
import { FormatPricePipe } from '../../pipes/format-price/format-price.pipe';
import { RelatedCarouselComponent } from './related-carousel/related-carousel.component';

@Component({
  selector: 'app-product-details',
  imports: [CommonModule, FormatPricePipe, RelatedCarouselComponent],
  templateUrl: './product-details.component.html',
})
export class ProductDetailsComponent {

  constructor(private route: ActivatedRoute, private router: Router , private publicService: PublicService) {}

  product: ProductForDetails = {} as ProductForDetails

  fetchProduct(slug: string){
    this.publicService.getForProductDetails(slug).subscribe({
      next: (data: ProductForDetails) => this.product = data,
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
}
