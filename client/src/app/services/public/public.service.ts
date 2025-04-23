import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductForCard, ProductForDetails } from '../../types/PublicProducts';

@Injectable({
  providedIn: 'root'
})
export class PublicService {
  private http = inject(HttpClient);

  getForCampaignCarousel(): Observable<ProductForCard[]>{
    return this.http.get<ProductForCard[]>('/api/products/store/campaign-carousel')
  }

  getForGrid(): Observable<ProductForCard[]>{
    return this.http.get<ProductForCard[]>('/api/products/store/grid')
  }

  getForProductDetails(slug: string): Observable<ProductForDetails>{
    return this.http.get<ProductForDetails>(`/api/products/store/product-details/${slug}`)
  }

  getRelatedProducts(id: number): Observable<ProductForCard[]>{
    return this.http.get<ProductForCard[]>(`/api/products/store/related-products/${id}`)
  }
}
