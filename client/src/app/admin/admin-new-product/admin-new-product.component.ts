import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms'
import { AdminService } from '../../services/admin/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-new-product',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './admin-new-product.component.html'
})

export class AdminNewProductComponent {

  newProductForm: FormGroup = new FormGroup({
    product_name: new FormControl(''),
    description: new FormControl(''),
    superCategory: new FormControl(''),
    category: new FormControl(''),
    brand: new FormControl(''),
    sku: new FormControl(''),
    price: new FormControl(''),
    date: new FormControl(''),
    image: new FormControl(null),
  })

  private router: Router = inject(Router)

  subcategories = [
    [
        {value: "Spel till Xbox"},
        {value: "Spel till Playstation"},
        {value: "Spel till Nintendo"},
        {value: "Spel till PC"},
        {value: "Retrospel"},
        {value: "Kort- & Brädspel"}
    ],
    [
        {value: "Xbox"},
        {value: "Playstation"},
        {value: "Nintendo"},
        {value: "Retro"},
    ],
    [
        {value: "Kompletta Datorer"},
        {value: "Processorer / CPU"},
        {value: "Grafikkort / GPU"},
        {value: "Moderkort"},
        {value: "Lagring"},
        {value: "Minne / RAM"},
        {value: "Chassi"},
        {value: "Nätaggregat / PSU"},
        {value: "Övrigt"},
    ],
    [
        {value: "TV"},
        {value: "Bildskärmar"},
        {value: "Hörlurar"},
        {value: "Högtalare"},
        {value: "Headsets"},
        {value: "Kablar & Kontakter"},
    ],
    [
        {value: "LEGO"},
        {value: "Samlarprylar"},
        {value: "Samlarkort"},
        {value: "Leksaker"},
    ],
  ]

  file: File | null = null;

  categoryIndex: number = 0;

  error: boolean = false;

  private adminService = inject(AdminService)


  handleFileChange(event: any): void {
    const file: File = event.target.files[0];
    if (!file) return

    this.file = file;
  }


  handleSubcategoryChange(event: any): void{
    this.categoryIndex = event.target.value
    this.newProductForm.controls['category'].reset();
  }

  handleSubmit(): void{
    if(!this.newProductForm.valid || !this.file) return;

    const formData: FormData = new FormData;

    Object.keys(this.newProductForm.value).forEach((key) => {
      formData.append(key, this.newProductForm.get(key)?.value)
    })

    formData.append('image', this.file);

    this.adminService.newProduct(formData).subscribe(
      {next: (_) => {
        this.router.navigate(['/admin/products']);
      }
      ,error: (_) => {this.error = true}})
  }
}
