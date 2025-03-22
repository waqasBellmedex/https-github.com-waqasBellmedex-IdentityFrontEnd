import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { MessageService } from 'primeng/api';
import { AuthService } from 'src/app/core/services/authentication/auth.service';
import { AccountService, AuthenticationRequest } from 'src/app/core/services/nswag/service-proxies';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  type: string = "password";
  isText: boolean = false;
  eyeIcon: string = "fa-eye-slash";
  loginRequest: AuthenticationRequest = new AuthenticationRequest();
  constructor(private translationService: TranslateService,
    private messageService: MessageService,
    private accountService: AccountService,
    private router:Router,
    private auth:AuthService
  ) {

  }
  hideshowPass() {
    this.isText = !this.isText;
    this.isText ? this.eyeIcon = "fa-eye" : this.eyeIcon = "fa-eye-slash";
    this.isText ? this.type = "text" : this.type = "password"
  }
  submit() {
    // this.router.navigate(['/main-page']);
    this.accountService.login(this.loginRequest).subscribe(response => {
      if (response) {
     if(response.isSuccess)
     {
      this.auth.setToken(response.result.token!);
      this.auth.setLoginDetails(response.result);
      this.messageService.add({severity: 'success',summary:'success',detail:this.translationService.instant('LOGIN.LOGINSUCCESS')})
      this.router.navigate(['/main-page']);  
    }
    }
    })
  }
}



