import { Injectable } from '@angular/core';
import { HousingLocation } from './housinglocation';

@Injectable({
  providedIn: 'root',
})
export class HousingService {
  dataBaseUrl = 'http://localhost:3000/locations';
  imageBaseUrl = 'https://angular.dev/assets/images/tutorials/common';

  housingLocationList: HousingLocation[] | undefined;

  getImageBaseUrl(): string {
    return this.imageBaseUrl;
  }

  async getAllHousingLocations(): Promise<HousingLocation[]> {
    const data = await fetch(this.dataBaseUrl);
    return (await data.json()) ?? [];
  }

  async getHousingLocationById(
    id: number
  ): Promise<HousingLocation | undefined> {
    const data = await fetch(`${this.dataBaseUrl}/${id}`);
    return data ? data.json() : null;
  }

  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(
      `Homes application received: firstName: ${firstName}, lastName: ${lastName}, email: ${email}.`
    );
  }
}
