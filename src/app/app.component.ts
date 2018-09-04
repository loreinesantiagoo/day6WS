import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { WedersvcService } from './services/wedersvc.service';

import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'day6WS';
  results = {
    temp: 0,
    humidity: 0,
    pressure: 0,
  };
  desc = '';

  wederResult = new FormGroup({
    city: new FormControl(''),
    weather: new FormControl('')
  });

  constructor(private service: WedersvcService,
  private router: Router) { }

  ngOnInit() {
    const cityField = this.wederResult.get('city');
    const debounce = cityField.valueChanges.pipe(
      debounceTime(1000), // delay 1000 msec
      distinctUntilChanged() // only for changed value
    );
    debounce.subscribe(changes => {
      console.log(changes);
      this.service.searchWeather(changes)
        .subscribe((data: any) => {
          console.log(data);
          this.results = data.results;
          this.desc = data.weather[0].description;
        });

    });
  }

  navigateToHome() {
    this.router.navigate(['/home']);
  }
}
