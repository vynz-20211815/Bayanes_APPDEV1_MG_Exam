import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WeatherService } from '../../services/weather.service';
import { CityService } from '../../services/city.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
})
export class Home {
  city: string = '';
  weatherData: any = null;
  errorMessage: string = '';

  constructor(
    private weatherService: WeatherService,
    private cityService: CityService
  ) { }

  getWeather() {
    this.weatherData = null;
    this.errorMessage = '';

    this.weatherService.getWeather(this.city).subscribe({
      next: (data) => {
        this.weatherData = data;
      },
      error: () => {
        this.errorMessage = 'City Not found or API Error';
      }
    });
  }

  saveCity() {
    if (this.weatherData) {
      const cityName = this.weatherData.location.name;
      const temp = this.weatherData.current.temperature;
      this.cityService.addCity(cityName, temp);
      alert(`${cityName} saved successfully!`);
    }
  }
}
