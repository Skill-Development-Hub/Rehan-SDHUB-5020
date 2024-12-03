import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  onSearch(event: any): void {
    const searchTerm = event.target.value;
    console.log('Search term:', searchTerm);
    // Handle search logic (e.g., filtering or making API calls)
  }
}
