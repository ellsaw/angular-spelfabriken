import { Component } from '@angular/core';
import { HeroComponent } from './hero/hero.component';
import { CampaignCarouselComponent } from "./campaign-carousel/campaign-carousel.component";

@Component({
  selector: 'app-home',
  imports: [HeroComponent, CampaignCarouselComponent],
  templateUrl: './home.component.html',
})
export class HomeComponent {

}
