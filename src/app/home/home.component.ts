import { Component, inject } from '@angular/core';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingLocation } from '../housinglocation';
import { HousingService } from '../housing.service';
import { NgFor } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HousingLocationComponent, NgFor, ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  housingLocationList: HousingLocation[] | undefined;
  filteredHousingLocationList: HousingLocation[] | undefined;

  housingService: HousingService = inject(HousingService);

  constructor() {
    this.housingService
      .getAllHousingLocations()
      .then((data) => {
        this.housingLocationList = data;
        this.filteredHousingLocationList = this.housingLocationList;
      })
      .catch((error) => console.log(error));
  }

  filterResults(filter: string) {
    if (!filter) {
      this.filteredHousingLocationList = this.housingLocationList;
      return;
    }

    this.filteredHousingLocationList = this.filteredHousingLocationList?.filter(
      (housingLocation) =>
        housingLocation.city.toLowerCase().includes(filter?.toLowerCase())
    );
  }
}
