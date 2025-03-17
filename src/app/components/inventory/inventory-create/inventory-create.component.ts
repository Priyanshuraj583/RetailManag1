import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inventory-create',
  imports:[ReactiveFormsModule],
  template: `
    <div class="create-container">
      <h2>Add New Product</h2>
      <form [formGroup]="productForm" (ngSubmit)="onSubmit()">
        <div class="form-group">
          <label for="name">Product Name</label>
          <input id="name" type="text" formControlName="name">
        </div>
        
        <div class="form-group">
          <label for="description">Description</label>
          <textarea id="description" formControlName="description"></textarea>
        </div>
        
        <div class="form-group">
          <label for="category">Category</label>
          <input id="category" type="text" formControlName="category">
        </div>
        
        <div class="form-group">
          <label for="stockLevel">Stock Level</label>
          <input id="stockLevel" type="number" formControlName="stockLevel">
        </div>
        
        <div class="form-group">
          <label for="price">Price</label>
          <input id="price" type="number" step="0.01" formControlName="price">
        </div>
        
        <div class="form-group">
          <label for="supplierId">Supplier ID</label>
          <input id="supplierId" type="number" formControlName="supplierId">
        </div>
        
        <div class="button-group">
          <button type="submit" [disabled]="productForm.invalid" class="btn-primary">Create Product</button>
          <button type="button" (click)="cancel()" class="btn-secondary">Cancel</button>
        </div>
      </form>
    </div>
  `,
  styles: [`
    .create-container {
      max-width: 600px;
      margin: 40px auto;
      padding: 20px;
      background: white;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }
    .form-group {
      margin-bottom: 20px;
    }
    label {
      display: block;
      margin-bottom: 5px;
      font-weight: 500;
    }
    input, textarea {
      width: 100%;
      padding: 8px;
      border: 1px solid #ddd;
      border-radius: 4px;
    }
    textarea {
      height: 100px;
      resize: vertical;
    }
    .button-group {
      display: flex;
      gap: 10px;
      margin-top: 20px;
    }
    .btn-primary {
      background-color: #007bff;
      color: white;
      border: none;
      padding: 10px 20px;
      border-radius: 4px;
      cursor: pointer;
    }
    .btn-primary:disabled {
      background-color: #ccc;
      cursor: not-allowed;
    }
    .btn-secondary {
      background-color: #6c757d;
      color: white;
      border: none;
      padding: 10px 20px;
      border-radius: 4px;
      cursor: pointer;
    }
  `]
})
export class InventoryCreateComponent {
  productForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {
    this.productForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      category: ['', Validators.required],
      stockLevel: [0, [Validators.required, Validators.min(0)]],
      price: [0, [Validators.required, Validators.min(0)]],
      supplierId: [null, Validators.required]
    });
  }

  onSubmit() {
    if (this.productForm.valid) {
      // TODO: Implement product creation
      this.router.navigate(['/inventory']);
    }
  }

  cancel() {
    this.router.navigate(['/inventory']);
  }
}