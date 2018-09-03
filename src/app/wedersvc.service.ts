import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WedersvcService {

  constructor(private http: HttpClient) { }

  searchWeather(changes): Observable<any> {
    return this.http.get(`http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID={$changes}`);
  }
}
