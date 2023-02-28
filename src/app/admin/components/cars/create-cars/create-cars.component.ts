import { Component , EventEmitter, OnInit, Output } from '@angular/core';
import { delay } from 'rxjs';
import { createCar } from 'src/app/contracts/createCar';
import { AlertifyService, MessageType, Position } from 'src/app/services/admin/alertify.service';
import { CarService } from 'src/app/services/admin/models/car.service';

@Component({
  selector: 'app-create-cars',
  templateUrl: './create-cars.component.html',
  styleUrls: ['./create-cars.component.scss']
})
export class CreateCarsComponent implements OnInit{
    constructor(private carService : CarService , private alertify : AlertifyService){

    }

    ngOnInit(): void {
      
    }
    @Output() createdCar : EventEmitter<createCar> = new EventEmitter();

    create(name : HTMLInputElement , price : HTMLInputElement){
      const  car : createCar = new createCar();

      car.name = name.value;
      
      car.price = parseInt(price.value);

      this.carService.CarCreate(car ,  () => {
        this.alertify.message1("Adding process was succesfull" , MessageType.Success , Position.TopRight , 15 , true);
        this.createdCar.emit(car);
      }, errorMessage => {
        this.alertify.message1(errorMessage , MessageType.Error , Position.TopRight , 15 , true);
      })

    }
}
