import { Component } from '@angular/core';
import { ProductCardComponent } from '../global/product-card/product-card.component';
import { CommonModule } from '@angular/common';
import { ProductForCard } from '../../types/PublicProducts';
import { ActivatedRoute, Router } from '@angular/router';
import { PublicService } from '../../services/public/public.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-search-results',
  imports: [ProductCardComponent, CommonModule],
  templateUrl: './search-results.component.html',
})
export class SearchResultsComponent {
  products: ProductForCard[] = [];
  query: string | null = null;
  private queryParamsSubscription!: Subscription;

  constructor(private route: ActivatedRoute, private router: Router,private publicService: PublicService) {}

  fetchProducts(): void {
    if(!this.query){
      this.router.navigate(['/'])
      return;
    } 
    this.publicService.getSearchResults(this.query).subscribe((data: ProductForCard[]) => this.products = data)
  }
  
  ngOnInit(): void {
    this.queryParamsSubscription = this.route.queryParams.subscribe(params => {
      this.query = params['q'] || '';
      this.fetchProducts();
    });
  }

  ngOnDestroy(){
    if (this.queryParamsSubscription) {
      this.queryParamsSubscription.unsubscribe();
    }
  }
}
