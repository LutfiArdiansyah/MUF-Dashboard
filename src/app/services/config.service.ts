import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  api_url:string = 'https://mufondev.muf.co.id/MUFDealer/';

  constructor() { }
}
