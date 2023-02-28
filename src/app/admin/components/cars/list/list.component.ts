import { Component, OnInit } from '@angular/core';
import { NgxSpinner, NgxSpinnerComponent, NgxSpinnerService } from 'ngx-spinner';
import { baseComponent, SpinnerType } from 'src/app/base/baseComponent';
import { CarService } from 'src/app/services/admin/models/car.service';
import {AfterViewInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { listCar } from 'src/app/contracts/listCar';
import { AlertifyService, MessageType, Position } from 'src/app/services/admin/alertify.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent extends baseComponent implements OnInit{

constructor(spinner : NgxSpinnerService , private service :CarService , private alertify : AlertifyService){
super(spinner);
}
displayedColumns: string[] = ['name', 'price', 'createdDate', 'updatedDate'];
dataSource :MatTableDataSource<listCar>  = null;

@ViewChild(MatPaginator) paginator: MatPaginator;

ngOnInit(){
  this.list();

}

async list(){
  this.showSpinner(SpinnerType.BallAtom);

  const allValues : {total : number , cars : listCar[]} = await this.service.list(this.paginator ? this.paginator.pageIndex : 0 , 
    this.paginator ? this.paginator.pageSize : 5 , () => this.hideSpinner(SpinnerType.BallAtom) , 
    errorMessage => {
        this.alertify.message1(errorMessage , MessageType.Error , Position.TopRight , 15 , true)
    });
    this.dataSource = new MatTableDataSource<listCar>(allValues.cars);
    this.paginator.length = allValues.total;
}

pageChanged(){
  this.list();
}



}
