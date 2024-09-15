import { Injectable } from '@angular/core';
import { Route } from '@angular/router';
import { AuthDetails } from 'src/app/Models/auth-details';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private route:Route) {}

   setToken(token: string): void {
    localStorage.setItem('token', token);
  }
  getToken(): string | null {
    return localStorage.getItem('token');
  }

  isLoggedIn() {
    return this.getToken() !== null;
  }
  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  }
  setLoginDetails(data:any){
    localStorage.setItem('user', window.btoa(JSON.stringify(data)));
  }
  getLoginDetails() {
    var user=localStorage.getItem('user');
    if(user!=null){
      return JSON.parse(window.atob(user==undefined?"":user)) as AuthDetails;
    }
    return null;
  }
}
