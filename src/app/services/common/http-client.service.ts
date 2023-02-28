import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(private httpClient : HttpClient , @Inject("baseUrl") private baseUrl : string) { }

  url( requestParameters :Partial<RequestParameter>) : string{

    return `${requestParameters.baseUrl ? requestParameters.baseUrl : this.baseUrl}/${requestParameters.contrroller}${requestParameters.action ? `/${requestParameters.action}` : ""}`;
  }

  get<T>(requestParameters : Partial<RequestParameter> , id? :string) : Observable<T>{
    let url : string = ``;
    if(requestParameters.fulendpoint)
        url = requestParameters.fulendpoint;
    else{
      url  = `${this.url(requestParameters)}${id ? `/${id}` : ""}${requestParameters.queryString ? `/?${requestParameters.queryString}` : ""}`;
    }

    return this.httpClient.get<T>(url , {headers : requestParameters.headers});
  }

  post<T>(requestParameters : Partial<RequestParameter> , body : Partial<T>) : Observable<T>{
      let url : string = "";
      if(requestParameters.fulendpoint){
        url = requestParameters.fulendpoint;
      }
      else{
        url = `${this.url(requestParameters)}${requestParameters.queryString ? `/?${requestParameters.queryString}` : ""}`;
      }

      return this.httpClient.post<T>(url , body , {headers : requestParameters.headers});
  }
  put<T>(requestParameters : Partial<RequestParameter> , body : Partial<T> ) : Observable<T>{
    let url : string = "";
    if(requestParameters.fulendpoint){
      url = requestParameters.fulendpoint;
    }
    else{
      url = `${this.url(requestParameters)}${requestParameters.queryString ? `/?${requestParameters.queryString}` : ""}`;
    }

    return this.httpClient.put<T>(url , body , {headers : requestParameters.headers});
}
delete<T>(requestParameters : Partial<RequestParameter> , id : string ) : Observable<T>{
  let url : string = "";
  if(requestParameters.fulendpoint){
    url = requestParameters.fulendpoint;
  }
  else{
    url = `${this.url(requestParameters)}/${id}${requestParameters.queryString ? `/?${requestParameters.queryString}` : ""}`;
  }

  return this.httpClient.delete<T>(url , {headers : requestParameters.headers});
}


}

export class RequestParameter{
  contrroller? :string;
  action? : string;
  baseUrl : string;
  headers? : HttpHeaders;

  queryString? : string;


  fulendpoint? : string;
}
