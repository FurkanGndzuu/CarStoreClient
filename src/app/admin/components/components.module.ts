import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersModule } from './orders/orders.module';
import { CustomersModule } from './customers/customers.module';
import { CategoriesModule } from './categories/categories.module';
import { CarsModule } from './cars/cars.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    OrdersModule,
    CustomersModule,
    CategoriesModule,
    CarsModule,
    DashboardModule,
    RouterModule
  ],
  exports : [
   
  ]
})
export class ComponentsModule { }
