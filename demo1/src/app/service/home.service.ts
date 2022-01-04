import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Info } from '../utils/info';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  readonly baseUrl = "http://411e-79-112-77-245.ngrok.io/demo1/";
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
