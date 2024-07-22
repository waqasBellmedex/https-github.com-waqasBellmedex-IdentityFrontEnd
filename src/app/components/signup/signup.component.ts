import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AccountService, RegistrationRequest } from 'src/app/core/services/nswag/service-proxies';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  constructor(public accountServices: AccountService) { }
  type: string = "password";
  isText: boolean = false;
  eyeIcon: string = "fa-eye-slash";
  registrationdto: RegistrationRequest = new RegistrationRequest();
  hideshowPass() {
    this.isText = !this.isText;
    this.isText ? this.eyeIcon = "fa-eye" : this.eyeIcon = "fa-eye-slash";
    this.isText ? this.type = "text" : this.type = "password"
  }



  submit() {
    debugger;
    this.accountServices.register(this.registrationdto).subscribe(response => {
      if (response.isSuccess) {
debugger;
      }
      else {

      }
    });


  }



}
