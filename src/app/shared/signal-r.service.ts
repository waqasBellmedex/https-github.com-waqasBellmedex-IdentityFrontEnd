import { Injectable, Signal } from '@angular/core';
import * as signalR from '@microsoft/signalr';
import { HubConnectionBuilder } from '@microsoft/signalr';
import { environment as env } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class SignalRService {

  private hubConnection!: signalR.HubConnection;
  constructor() { }

  createHubCOnnection()
  {
    this.hubConnection = new HubConnectionBuilder()  .configureLogging(signalR.LogLevel.Error)

    .withUrl(env.apiUrl + '/hubs/notification', {
      skipNegotiation: true,
      transport: signalR.HttpTransportType.WebSockets,
      // accessTokenFactory: () => this.authService.getLoginDetails()!.token
    })
    .withAutomaticReconnect()
    .build()
    this.hubConnection.keepAliveIntervalInMilliseconds  = 100000000000;
    this.hubConnection.serverTimeoutInMilliseconds  = 100000000000;

    this.hubConnection.start().then(function () {
    }).catch(function (err:any) {
    });

    this.hubConnection.on("ReceiveTabConnected", (res:any) => {
    });
    
  }
  
  stopHubConnection() {
    this.hubConnection.stop().catch();
  }
}
