import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { AuthdataType } from '../types/authdata.type';

@Injectable({
  providedIn: 'root'
})
export class SignUpService {

  constructor(private http:HttpClient) { }

  handelSignup(userData:AuthdataType){
    let signupApiUrl = 'http://localhost:3000/api/auth/seller/sign-up'
    return this.http.post(signupApiUrl,userData,{withCredentials:true})
  }
}
