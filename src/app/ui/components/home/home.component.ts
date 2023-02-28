import { Component } from '@angular/core';
import { baseComponent } from 'src/app/base/baseComponent';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent extends baseComponent {
constructor(spinner : NgxSpinnerService) {
  super(spinner);
}
}
