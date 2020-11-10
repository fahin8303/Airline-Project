import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LocationAir } from '../Module/LocationAir';
import { AirFare } from '../Module/AirFare';

@Injectable({
  providedIn: 'root',
})
export class ListAirlineService {
  private _url = 'http://localhost:8081';
  constructor(private http: HttpClient) {}

  getAirlineList(): Observable<LocationAir> {
    // make http request to fetch the Airline details
    return this.http.get<LocationAir>(`${this._url}/${'airports'}`);
  }

  getAirlinefare(origin: string, destiny: string): Observable<AirFare> {
    // make http request to the given url and fetch the contacts
    return this.http.get<AirFare>(
      `${this._url}/${'getfare'}/${origin}/${destiny}`
    );
  }
}
