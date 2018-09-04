import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WedersvcService {

  constructor(private http: HttpClient) { }

  searchWeather(city): Observable<any> {
    console.log('getWeather>');
    return this.http.get(`{$environment.openweather_url}${city}&APPID={$environment.openweather_api_key}`);
  }
}
// http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID={$changes}
