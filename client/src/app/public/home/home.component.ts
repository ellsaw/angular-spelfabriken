import { Component } from '@angular/core';
import { HeroComponent } from './hero/hero.component';
import { CampaignCarouselComponent } from "./campaign-carousel/campaign-carousel.component";
import { ProductGridComponent } from './product-grid/product-grid.component';

@Component({
  selector: 'app-home',
  imports: [HeroComponent, CampaignCarouselComponent, ProductGridComponent],
  templateUrl: './home.component.html',
})
export class HomeComponent {

}
