import { Component, inject } from '@angular/core';
import { ProductsForAdmin } from '../../types/AdminProduct';
import { AdminService } from '../../services/admin.service';
import { CommonModule } from '@angular/common';
import formatPrice from '../../../utils/formatPrice';

@Component({
  selector: 'app-admin-products',
  imports: [CommonModule],
  templateUrl: './admin-products.component.html',
})
export class AdminProductsComponent {
  private adminService = inject(AdminService)

  products: ProductsForAdmin[] = [];

  fetchProducts(): void{
    this.adminService.getProductsForAdmin().subscribe((data: ProductsForAdmin[]) => this.products = data)

    this.products.forEach((product) => {

      if(typeof product.price === 'string') return;

      product.price = formatPrice(product.price)
    })
  }

  ngOnInit(): void{
    this.fetchProducts();
  }

  deleteProduct(id: number, productName: string, brand: string): void{
    if(!confirm(`Är du säker på att du vill ta bort ${brand} - ${productName}?\nDetta kan inte ångras.`)) return;

    this.adminService.deleteProduct(id).subscribe({
      next: (_) => {
        this.fetchProducts();
      },
      error: (error) => {
        console.error(error);
      }
    })
  }
}
