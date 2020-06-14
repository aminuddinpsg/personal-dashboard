import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-temperature-card',
  templateUrl: './temperature-card.component.html',
  styleUrls: ['./temperature-card.component.css']
})
export class TemperatureCardComponent implements OnInit {

  temperatureInfo = {
    temperature: 30,
    unit: "°C",
    city: "Bangkok",
    country: "Thailand",
    icon: "cloud"
  }

  constructor() {
  }

  ngOnInit(): void {
  }

}
