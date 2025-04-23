import { Routes } from '@angular/router';
import { AdminLayoutComponent } from './admin/admin-layout/admin-layout.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminNewProductComponent } from './admin/admin-new-product/admin-new-product.component';
import { PublicLayoutComponent } from './public/public-layout/public-layout.component';
import { HomeComponent } from './public/home/home.component';
import { ProductDetailsComponent } from './public/product-details/product-details.component';
import { SearchResultsComponent } from './public/search-results/search-results.component';

export const routes: Routes = [
    {
        path: "",
        component: PublicLayoutComponent,
        children: [
            {path: "", pathMatch: 'full', component: HomeComponent},
            {path: "produkt/:slug", component: ProductDetailsComponent},
            {path: "hitta", component: SearchResultsComponent}
        ]
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
