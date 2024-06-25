import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignInService {

  constructor(private http:HttpClient) { }
  handelSignin(userData:{}){
    return this.http.post("",userData,{withCredentials:true})
  }
}
