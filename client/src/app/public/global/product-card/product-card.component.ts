import { Component, Input } from '@angular/core';
import { ProductForCard } from '../../../types/PublicProducts';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormatPricePipe } from '../../../pipes/format-price/format-price.pipe';

@Component({
  selector: 'app-product-card',
  imports: [FormatPricePipe, CommonModule, RouterLink],
  templateUrl: './product-card.component.html'
})
export class ProductCardComponent {
  @Input() product: ProductForCard = {} as ProductForCard

  Math = Math;
}
