import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../../models/user.model';
import { AuthService } from '../../../services/auth.service';
import { Router, RouterModule } from '@angular/router';


@Component({
  imports:[RouterModule, CommonModule],
  template: `
    <div class="inventory-container">
      <h2>Inventory Management</h2>
      <div *ngIf="authService.currentUserValue?.role === 'manager'">
        <button (click)="navigateToCreate()" class="btn-primary">Add New Product</button>
      </div>
      <div class="product-list">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Category</th>
              <th>Stock Level</th>
              <th>Price</th>
              <th>Supplier ID</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr *ngFor="let product of products">
              <td>{{ product.name }}</td>
              <td>{{ product.description }}</td>
              <td>{{ product.category }}</td>
              <td>{{ product.stockLevel }}</td>
              <td>{{ product.price }}</td>
              <td>
                <a [routerLink]="['/supplier/view', product.supplierId]">
                  {{ product.supplierId }}
                </a>
              </td>
              <td>
                <button *ngIf="authService.currentUserValue?.role === 'manager'"
                        (click)="navigateToEdit(product.id)" 
                        class="btn-secondary">
                  Edit
                </button>
                <button *ngIf="authService.currentUserValue?.role === 'manager'"
                        (click)="deleteProduct(product.id)" 
                        class="btn-danger">
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  `,
  styles: [`
    .inventory-container {
      padding: 20px;
      max-width: 1200px;
      margin: 0 auto;
    }
    .btn-primary {
      background-color: #007bff;
      color: white;
      border: none;
      padding: 8px 16px;
      border-radius: 4px;
      cursor: pointer;
      margin-bottom: 20px;
    }
    table {
      width: 100%;
      border-collapse: collapse;
      margin-top: 20px;
    }
    th, td {
      border: 1px solid #ddd;
      padding: 8px;
      text-align: left;
    }
    th {
      background-color: #f4f4f4;
    }
    .btn-secondary {
      background-color: #6c757d;
      color: white;
      border: none;
      padding: 4px 8px;
      border-radius: 4px;
      cursor: pointer;
      margin-right: 5px;
    }
    .btn-danger {
      background-color: #dc3545;
      color: white;
      border: none;
      padding: 4px 8px;
      border-radius: 4px;
      cursor: pointer;
    }
  `]
})
export class InventoryComponent implements OnInit {
  products: Product[] = [];

  constructor(
    public authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    // TODO: Implement product fetching
  }

  navigateToCreate() {
    this.router.navigate(['/inventory/create']);
  }

  navigateToEdit(id: number) {
    this.router.navigate(['/inventory/edit', id]);
  }

  deleteProduct(id: number) {
    // TODO: Implement product deletion
  }
}