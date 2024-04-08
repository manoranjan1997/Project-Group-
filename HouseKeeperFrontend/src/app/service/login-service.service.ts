import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(private http:HttpClient) { }

  url:string='http://localhost:8087/'
  checkAdmin(data:any){
    return this.http.post(this.url+'checkAdminLogin',data)
  }
  
  getAdminById(data:any){
    return this.http.get(this.url+'getAdminById/'+data);
  }

  checkUser(data:any){
    return this.http.post(this.url+'checkUserLogin',data)
  }
}
