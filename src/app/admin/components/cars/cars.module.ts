import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarsComponent } from './cars.component';
import { RouterModule } from '@angular/router';
import { CreateCarsComponent } from './create-cars/create-cars.component';
import { ListComponent } from './list/list.component';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';



@NgModule({
  declarations: [
    CarsComponent,
    CreateCarsComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path : "" , component : CarsComponent}
    ]),

    MatTableModule,
    MatPaginatorModule

  ],
  exports : [
   CreateCarsComponent
  ]
})
export class CarsModule { }
