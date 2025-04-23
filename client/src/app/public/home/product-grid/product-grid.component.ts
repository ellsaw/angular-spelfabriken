import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { PublicService } from '../../../services/public/public.service';
import { ProductForCard } from '../../../types/PublicProducts';
import { ProductCardComponent } from '../../global/product-card/product-card.component';

@Component({
  selector: 'app-product-grid',
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './product-grid.component.html'
})
export class ProductGridComponent {
  private publicService: PublicService  = inject(PublicService)

  products: ProductForCard[] = []

  ngOnInit(): void {
    this.publicService.getForGrid().subscribe((data: ProductForCard[]) =>  this.products = data)
  }

}
