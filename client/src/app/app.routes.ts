import { Routes } from '@angular/router';
import { AdminLayoutComponent } from './admin/admin-layout/admin-layout.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';

export const routes: Routes = [
    {
        path: "admin",
        component: AdminLayoutComponent,
        children: [
            {path: "", redirectTo:'products', pathMatch: 'full'},
            {path: "products", component: AdminProductsComponent, pathMatch: 'full'}
        ]
    }
];
