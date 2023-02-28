import { Component } from '@angular/core';
import { baseComponent } from 'src/app/base/baseComponent';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent extends baseComponent {

  constructor(spinner : NgxSpinnerService){
    super(spinner);
  }

}
