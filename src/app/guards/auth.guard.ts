import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private authService: AuthService
  ) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const currentUser = this.authService.currentUserValue;
    const requiredRole = route.data['role'] as string;

    if (!currentUser) {
      this.router.navigate(['/login']);
      return false;
    }

    if (requiredRole && currentUser.role !== requiredRole) {
      this.router.navigate(['/']);
      return false;
    }

    return true;
  }
}