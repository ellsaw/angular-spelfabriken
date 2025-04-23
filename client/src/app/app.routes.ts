import { Routes } from '@angular/router';
import { AdminLayoutComponent } from './admin/admin-layout/admin-layout.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminNewProductComponent } from './admin/admin-new-product/admin-new-product.component';
import { PublicLayoutComponent } from './public/public-layout/public-layout.component';

export const routes: Routes = [
    {
        path: "",
        component: PublicLayoutComponent
    },
    {
        path: "admin",
        component: AdminLayoutComponent,
        children: [
            {path: "", redirectTo:'products', pathMatch: 'full'},
            {path: "products", component: AdminProductsComponent, pathMatch: 'full'},
            {path: "products/new", component: AdminNewProductComponent, pathMatch: 'full'}
        ]
    }
];
