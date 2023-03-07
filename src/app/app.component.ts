import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';
import { WeatherData } from './models/weather.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private weatherService: WeatherService) { }

  // local variables 
  cityName: string = 'Washington%20DC';
  weatherData?: WeatherData; 

  ngOnInit(): void {
    this.getWeatherData(this.cityName);
    this.cityName = '';
  }

  onSubmit(): void {
    this.getWeatherData(this.cityName);
    this.cityName = '';
  }

  private getWeatherData(cityName: string): void {
    this.weatherService.getWeatherData(cityName)
    .subscribe({
      next: (response) => {
        // assign response from weather service method to local variable weatherData defined above
        this.weatherData = response;
        console.log(response);
      }
    });
  }

}
// function ngOnInit() {
//   throw new Error('Function not implemented.');
// }

