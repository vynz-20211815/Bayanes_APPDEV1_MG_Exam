import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CityService } from '../../services/city.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-saved-cities',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './saved-cities.html',
  styleUrls: ['./saved-cities.css']
})
export class SavedCities implements OnInit {
  savedCities: { name: string, temperature: number }[] = [];

  constructor(private cityService: CityService) { }

  ngOnInit() {
    this.loadCities();
  }

  loadCities() {
    this.savedCities = this.cityService.getCities();
  }

  removeCity(city: string) {
    this.cityService.removeCity(city);
    this.loadCities();
  }
}
