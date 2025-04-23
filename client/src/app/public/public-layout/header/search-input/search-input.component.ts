import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-input',
  imports: [ReactiveFormsModule],
  templateUrl: './search-input.component.html',
})
export class SearchInputComponent {
  @ViewChild('searchInput') searchInput!: ElementRef<HTMLInputElement>;
  
  searchForm: FormGroup = new FormGroup({
    query: new FormControl('')
  })

  constructor(private router: Router) {}

  onSubmit(): void{
    const value = this.searchForm.value.query;

    if(!value) return;

    const trimmedValue = value.trim().replace(/\//g, "")

    this.router.navigate(['/hitta'], {
      queryParams: { q: trimmedValue }
    })

    this.searchInput.nativeElement.blur();

    this.searchForm.reset();
  }

}
