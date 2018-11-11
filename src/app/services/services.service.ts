import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private http: HttpClient, private config:ConfigService) { }

  getData(link: string): Observable<any> {
    return this.http.get<any>(this.config.api_url + link);
  }

  postData(link: string, data: any): Observable<any> {
    return this.http.post<any>(this.config.api_url + link, data);
  }
}
