import { Component , OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { baseComponent, SpinnerType } from 'src/app/base/baseComponent';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent extends baseComponent implements OnInit {
constructor(spinner : NgxSpinnerService){
  super(spinner);
}
ngOnInit(): void {
  this.showSpinner(SpinnerType.BallAtom);
}
}
