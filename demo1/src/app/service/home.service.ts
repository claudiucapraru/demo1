import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Info } from '../utils/info';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  readonly baseUrl = "http://4878-86-120-48-92.ngrok.io/demo1/";
  readonly httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
    }),
  };

  constructor(private httpClient: HttpClient) {}

  sendInfo(info: Info) {
    return this.httpClient.post(
      this.baseUrl,
      info,
      this.httpOptions
    );
  }
}
