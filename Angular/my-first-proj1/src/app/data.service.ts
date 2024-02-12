import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  url = "http://localhost:3000";
  headers!:HttpHeaders;

  constructor(private http:HttpClient) { 
    this.headers = new HttpHeaders()
    .set('content-type', 'application/json')
  }

  getData(){
    return "data1";
  }

  getProductData():Observable<any[]>{
    return this.http.get<any[]>(this.url + '/products',{headers:this.headers});
  }
  checkLogin(user:any){
    return this.http.post(this.url + '/login',user,{headers:this.headers});

  }
}
