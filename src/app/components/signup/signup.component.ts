import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RegistrationRequest, Service } from 'src/app/core/services/nswag/service-proxies';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  constructor(public services : Service){}
  type: string = "password";
  isText: boolean = false;
  eyeIcon: string = "fa-eye-slash";
  registrationdto : RegistrationRequest = new RegistrationRequest();
  hideshowPass() {
    this.isText = !this.isText;
    this.isText ? this.eyeIcon = "fa-eye" : this.eyeIcon = "fa-eye-slash";
    this.isText ? this.type = "text" : this.type = "password"
  }



    submit(){

      debugger;
      
    }



}
