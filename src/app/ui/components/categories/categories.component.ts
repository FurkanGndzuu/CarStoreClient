import { Component } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { baseComponent } from 'src/app/base/baseComponent';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent extends baseComponent {

  constructor(spinner : NgxSpinnerService){
    super(spinner);
  }

}
