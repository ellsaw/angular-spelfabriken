import { Component, inject } from '@angular/core';
import { PublicService } from '../../../services/public/public.service';
import { ProductForCard } from '../../../types/PublicProducts';
import { CarouselComponent } from '../../global/carousel/carousel.component';

@Component({
  selector: 'app-campaign-carousel',
  imports: [CarouselComponent],
  templateUrl: './campaign-carousel.component.html',
})
export class CampaignCarouselComponent {
  private publicService: PublicService = inject(PublicService);

  products: ProductForCard[] = [];

  ngOnInit(): void{
    this.publicService.getForCampaignCarousel().subscribe((data: ProductForCard[]) => this.products = data)
  }
}
