import { Injectable } from '@angular/core';
import { Route } from '@angular/router';
import { AuthDetails } from '../Models/auth-details';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor() { }

  setToken(token:string) : void
  {
    localStorage.setItem('token',token);
  }

  getToken() : string|null
  {
    return localStorage.getItem('token');
  }


  setLoginDetails(data:any)
  {
    localStorage.setItem('user',window.btoa(JSON.stringify(data)));
  }

  getLoginDetails() {
    var user=localStorage.getItem('user');
    if(user!=null){
      return JSON.parse(window.atob(user==undefined?"":user)) as AuthDetails;
    }
    return null;
  }

}
