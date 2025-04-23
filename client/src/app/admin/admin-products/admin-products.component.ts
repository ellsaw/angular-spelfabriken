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

  ngOnInit(): void{
    this.adminService.getProductsForAdmin().subscribe((data: ProductsForAdmin[]) => this.products = data)

    this.products.forEach((product) => {

      if(typeof product.price === 'string') return;

      product.price = formatPrice(product.price)
    })

  }

  deleteProduct(id: number, productName: string, brand: string): void{
    
  }
}
