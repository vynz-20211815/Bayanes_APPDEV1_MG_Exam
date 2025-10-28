import { Injectable } from '@angular/core';

interface CityData {
  name: string;
  temperature: number;
}

@Injectable({
  providedIn: 'root'
})
export class CityService {
  private savedCities: CityData[] = [];

  getCities(): CityData[] {
    return this.savedCities;
  }

  addCity(city: string, temperature: number): void {
    const exists = this.savedCities.some(c => c.name.toLowerCase() === city.toLowerCase());
    if (!exists) {
      this.savedCities.push({ name: city, temperature });
    }
  }

  removeCity(city: string): void {
    this.savedCities = this.savedCities.filter(c => c.name.toLowerCase() !== city.toLowerCase());
  }
}
