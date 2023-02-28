import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AdminModule } from './admin/admin.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UiModule } from './ui/ui.module';
import {ToastrModule} from 'ngx-toastr';

import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,UiModule,AdminModule,RouterModule,BrowserAnimationsModule,ToastrModule.forRoot(),NgxSpinnerModule,
    HttpClientModule
  ],
  providers: [
     {provide : "baseUrl" , useValue : "https://localhost:7256/api"}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
