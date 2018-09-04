import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { WederSvcService } from '../../services/wedersvc.service';

@Component({
  selector: 'app-weder',
  templateUrl: './weder.component.html',
  styleUrls: ['./weder.component.css']
})
export class WederComponent implements OnInit {


  constructor(private wSvc: WederSvcService, private route: Router) { }
  results = [];

  ngOnInit() {
    this.results = this.wSvc.getWeather();
  }

}
