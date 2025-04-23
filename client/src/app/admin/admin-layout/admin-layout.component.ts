import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { HeaderComponent } from "./header/header.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-admin-layout',
  imports: [HeaderComponent, RouterOutlet],
  templateUrl: './admin-layout.component.html',
})
export class AdminLayoutComponent {
  
  constructor(private titleService: Title) {}

  ngOnInit(): void {
    this.titleService.setTitle('Dashboard')


  }
}
