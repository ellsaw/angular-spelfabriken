import { inject, Injectable } from '@angular/core';
import { ProductsForAdmin } from '../types/AdminProduct';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private http = inject(HttpClient);

  getProductsForAdmin(): Observable<ProductsForAdmin[]>{
    return this.http.get<ProductsForAdmin[]>('/api/products/admin')
  }
}
