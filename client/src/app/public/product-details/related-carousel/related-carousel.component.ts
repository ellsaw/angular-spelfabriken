import { Component, Input, SimpleChanges } from '@angular/core';
import { CarouselComponent } from '../../global/carousel/carousel.component';
import { PublicService } from '../../../services/public/public.service';
import { ProductForCard } from '../../../types/PublicProducts';

@Component({
  selector: 'app-related-carousel',
  imports: [CarouselComponent],
  templateUrl: './related-carousel.component.html',
})
export class RelatedCarouselComponent {
  @Input() id: number | null = null;

  constructor(private publicService: PublicService) {}

  products: ProductForCard[] = [];


  fetchProducts(): void{
    if(!this.id) return;
    
    this.publicService.getRelatedProducts(this.id).subscribe((data: ProductForCard[]) => this.products = data)
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['id'] && changes['id'].currentValue !== undefined) {
      this.fetchProducts();
    }
  }
}
