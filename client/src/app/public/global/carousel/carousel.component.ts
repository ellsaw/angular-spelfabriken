import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ProductForCard } from '../../../types/PublicProducts';
import { ProductCardComponent } from '../product-card/product-card.component';

@Component({
  selector: 'app-carousel',
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './carousel.component.html'
})
export class CarouselComponent {
  @Input() products: ProductForCard[] = [];
}
