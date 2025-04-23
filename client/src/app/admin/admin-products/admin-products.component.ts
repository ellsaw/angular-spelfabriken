import { Component, inject } from '@angular/core';
import { ProductForAdmin } from '../../types/AdminProduct';
import { AdminService } from '../../services/admin/admin.service';
import { CommonModule } from '@angular/common';
import { FormatPricePipe } from '../../pipes/format-price/format-price.pipe';

@Component({
  selector: 'app-admin-products',
  imports: [CommonModule, FormatPricePipe],
  templateUrl: './admin-products.component.html',
})
export class AdminProductsComponent {
  private adminService = inject(AdminService)

  products: ProductForAdmin[] = [];

  fetchProducts(): void{
    this.adminService.getProductsForAdmin().subscribe((data: ProductForAdmin[]) => this.products = data)
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
