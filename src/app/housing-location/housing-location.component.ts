import { Component, Input, inject } from '@angular/core';
import { HousingLocation } from '../housinglocation';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HousingService } from '../housing.service';

@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: './housing-location.component.html',
  styleUrl: './housing-location.component.css',
})
export class HousingLocationComponent {
  @Input() housingLocation!: HousingLocation;
  housingService: HousingService = inject(HousingService);
  baseUrl: string = '';

  constructor() {
    this.baseUrl = this.housingService.getImageBaseUrl();
  }
}
