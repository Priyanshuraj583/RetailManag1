import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { InventoryComponent } from './components/inventory/inventory/inventory.component';
import { InventoryCreateComponent } from './components/inventory/inventory-create/inventory-create.component';
import { InMemoryDataService } from './services/in-memory-data.service';
import { AuthGuard } from './guards/auth.guard';

@NgModule({
  declarations: [
   
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService),
    RouterModule.forRoot([
        { path: 'login', component: LoginComponent },
        { path: 'register', component: RegisterComponent },
        { 
          path: 'dashboard', 
          component: DashboardComponent,
          canActivate: [AuthGuard]
        },
        {
          path: 'inventory',
          component: InventoryComponent,
          canActivate: [AuthGuard],
          data: { role: 'manager' }
        },
        {
          path: 'inventory/create',
          component: InventoryCreateComponent,
          canActivate: [AuthGuard],
          data: { role: 'manager' }
        },
        { path: '', redirectTo: '/login', pathMatch: 'full' }
    ])
  ],
  providers: []
//   bootstrap: [AppComponent]
})
export class AppModule { }