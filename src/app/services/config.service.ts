import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  api_url:string = 'https://mufondev.muf.co.id/MUFDealer/';
  // api_url:string = 'http://10.22.24.116/MUFDealer/';
  // api_url:string;

  constructor() { 
    /* if (window.location.protocol == "http:") {
      this.api_url = "http://10.22.24.116/MUFDealer/";
    } else {
      this.api_url = "https://mufondev.muf.co.id/MUFDealer/";
    } */
  }
}
