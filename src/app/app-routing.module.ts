import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarsModule } from './admin/components/cars/cars.module';
import { DashboardComponent } from './admin/components/dashboard/dashboard.component';
import { LayoutComponent } from './admin/layout/layout.component';
import { HomeComponent } from './ui/components/home/home.component';

const routes: Routes = [
  {path : "admin" ,component : LayoutComponent , children : [
    {path : "" , component : DashboardComponent},
    {path : "cars" , loadChildren : () => import("./admin/components/cars/cars.module").then(module => module.CarsModule)},
    {path : "orders" , loadChildren : () => import("./admin/components/orders/orders.module").then(module => module.OrdersModule)},
    {path : "cars" , loadChildren : () => import("./admin/components/categories/categories.module").then(module => module.CategoriesModule)},
    {path : "cars" , loadChildren : () => import("./admin/components/customers/customers.module").then(module => module.CustomersModule)}
  ]},
  {path : "" ,component : HomeComponent},
  {path : "cars" , loadChildren : () => import("./ui/components/cars/cars.module").then(module => module.CarsModule)},
  {path : "categories" ,loadChildren : () => import("./ui/components/categories/categories.module").then(module => module.CategoriesModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
