import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClient, HttpClientModule} from'@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import {TranslateLoader, TranslateModule, TranslateService} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { FormsModule } from '@angular/forms';
import { AccountService, API_BASE_URL } from './core/services/nswag/service-proxies';
import { environment } from 'src/environments/environment';
import { MessageService } from 'primeng/api';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
  }),
  ],
  providers: [TranslateService,AccountService,MessageService,
    { provide: API_BASE_URL, useFactory: getRemoteServiceBaseUrl },
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
export function getRemoteServiceBaseUrl(): string {
  return environment.apiUrl;
}

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}