export interface User {
    id: number;
    username: string;
    password: string;
    role: 'manager' | 'supplier';
    email: string;
  }
  
  export interface Product {
    id: number;
    name: string;
    description: string;
    category: string;
    stockLevel: number;
    supplierId: number;
    price: number;
  }
  
  export interface Supplier {
    id: number;
    name: string;
    email: string;
    phone: string;
    address: string;
  }
  
  export interface Sale {
    id: number;
    productId: number;
    quantity: number;
    totalPrice: number;
    date: string;
  }