import { Routes } from '@angular/router';
import { Home } from './component/home/home';
import { SavedCities } from './component/saved-cities/saved-cities';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'saved', component: SavedCities }
];
