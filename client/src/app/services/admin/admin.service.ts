import { inject, Injectable } from '@angular/core';
import { ProductForAdmin } from '../../types/AdminProduct';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private http = inject(HttpClient);

  getProductsForAdmin(): Observable<ProductForAdmin[]>{
    return this.http.get<ProductForAdmin[]>('/api/products/admin')
  }

  newProduct(product: FormData): Observable<any> {
    return this.http.post('/api/products/admin', product)
  }

  deleteProduct(id: number): Observable<any> {
    return this.http.post('/api/products/admin/delete', {id: id})
  }
}
