import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { User, Product, Supplier, Sale } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const users: User[] = [
      {
        id: 1,
        username: 'manager',
        password: 'manager123',
        role: 'manager',
        email: 'manager@example.com'
      },
      {
        id: 2,
        username: 'supplier',
        password: 'supplier123',
        role: 'supplier',
        email: 'supplier@example.com'
      }
    ];
    const products: Product[] = [];
    const suppliers: Supplier[] = [];
    const sales: Sale[] = [];

    return { users, products, suppliers, sales };
  }

  genId<T extends { id: number }>(collection: T[]): number {
    return collection.length > 0 
      ? Math.max(...collection.map(item => item.id)) + 1 
      : 1;
  }
}