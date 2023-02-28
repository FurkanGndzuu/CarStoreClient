import { Component , OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { baseComponent, SpinnerType } from 'src/app/base/baseComponent';
import { AlertifyService, MessageType, Position } from 'src/app/services/admin/alertify.service';
declare var $: any;
declare var alertify : any;
import { ViewChild } from '@angular/core';
import { ListComponent } from './list/list.component';
import { createCar } from 'src/app/contracts/createCar';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent extends baseComponent implements OnInit{

  constructor(private alert : AlertifyService , spinner : NgxSpinnerService){
    super(spinner);
    
  }
  ngOnInit(){
    this.alert.message1("Furkan"  , MessageType.Error , Position.BottomCenter);
    $(document).ready(function() {
      alert('I am Called From jQuery');
    });

    this.showSpinner(SpinnerType.BallAtom);


  }
  @ViewChild(ListComponent) listComponents: ListComponent;

  createdCar(createdProduct: createCar) {
    this.listComponents.list();
  }

m(){
  this.alert.message1("Furkan" , MessageType.Error , Position.BottomCenter,5,false);
  
}
}
