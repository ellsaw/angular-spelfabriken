import { inject, Injectable } from '@angular/core';
import { ProductsForAdmin } from '../types/AdminProduct';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private http = inject(HttpClient);

  getProductsForAdmin(): Observable<ProductsForAdmin[]>{
    return this.http.get<ProductsForAdmin[]>('/api/products/admin')
  }

  newProduct(product: FormData): Observable<any> {
    return this.http.post('/api/products/admin', product)
  }

  deleteProduct(id: number): Observable<any> {
    return this.http.post('/api/products/admin/delete', {id: id})
  }
}
