import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { CategoriesComponent } from './categories/categories.component';
import { CarsComponent } from './cars/cars.component';
import { RouterModule } from '@angular/router';
import { CarsModule } from './cars/cars.module';
import { CategoriesModule } from './categories/categories.module';
import { HomeModule } from './home/home.module';



@NgModule({
  declarations: [
   
  ],
  imports: [
    CommonModule,
    RouterModule,
    CarsModule,
    CategoriesModule,
    HomeModule
  ],
  exports : [
   
  ]
})
export class ComponentsModule { }
