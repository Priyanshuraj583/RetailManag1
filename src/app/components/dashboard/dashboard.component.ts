import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule],
  template: `
    <div class="dashboard-container">
      <h2>Welcome to the Dashboard</h2>
      <p>You are logged in as: {{ authService.currentUserValue?.username }}</p>
      <p>Role: {{ authService.currentUserValue?.role }}</p>
      
      <div class="navigation-buttons">
        <button *ngIf="authService.currentUserValue?.role === 'manager'"
                (click)="router.navigate(['/inventory'])"
                class="nav-button">
          Inventory Management
        </button>
      </div>
    </div>
  `,
  styles: [`
    .dashboard-container {
      max-width: 800px;
      margin: 50px auto;
      padding: 20px;
      border: 1px solid #ccc;
      border-radius: 5px;
    }
    .navigation-buttons {
      margin-top: 20px;
    }
    .nav-button {
      padding: 10px 20px;
      background-color: #007bff;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      margin-right: 10px;
    }
  `]
})
export class DashboardComponent {
  constructor(
    public authService: AuthService,
    public router: Router
  ) {}
}