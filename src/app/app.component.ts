import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { WedersvcService } from './wedersvc.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'day6WS';
  private results = [];

  wederResult = new FormGroup({
    city: new FormControl(''),
    weather: new FormControl('')
  });

  constructor(private service: WedersvcService) { }

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
        });

    });
  }
}
