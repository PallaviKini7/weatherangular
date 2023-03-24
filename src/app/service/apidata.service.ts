import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApidataService {

  constructor(private http: HttpClient) {
    
  }
  getapidata()
    {
      return this.http.get('https://api.openweathermap.org/data/2.5/weather?q=udupi&appid=b6dd063e3713f1625bdf567f180d9e0d&units=imperial')
    }
}
