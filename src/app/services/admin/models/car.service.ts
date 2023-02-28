import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { createCar } from 'src/app/contracts/createCar';
import { listCar } from 'src/app/contracts/listCar';
import { HttpClientService } from '../../common/http-client.service';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private httpClient : HttpClientService ) { }


  CarCreate(car :createCar , successCalBack : () => void , errorCallBack? : any){
        this.httpClient.post<createCar>({
          contrroller : "Car"
        },car).subscribe(response => {
          successCalBack();
        },
        (errorResponse : HttpErrorResponse) => {
          let message : string ="";
          const _error : Array<{key : string , value : Array<string>}> = errorResponse.error;

          _error.forEach((_v , _index) => {
            _v.value.forEach((_value , index) => {
              message += `${_value}</br>`
            })
          })

          errorCallBack(message);
        })
  }

  async list(page : number =0 , size :number = 5 , successCalBack? : () => void , errorCallBack? : (errorMessage) => void) : Promise<{total : number , cars : listCar[]}>{

    const promisData : Promise<{total : number , cars : listCar[]}> = this.httpClient.get<{total : number , cars : listCar[]}>(
      {contrroller : "Car" , queryString : `page=${page}&size=${size}`}
    ).toPromise();

    promisData.then(x => successCalBack()).catch((errorResponse : HttpErrorResponse) => {
      errorCallBack(errorResponse.error)
    });
    return await promisData;

  }

}
