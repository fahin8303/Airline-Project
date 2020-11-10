import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LocationAir } from './Module/LocationAir';
import { AlertsService } from 'angular-alert-module';
import { ListAirlineService } from './service/list-airline.service';
import { AirFare } from './Module/AirFare';

@Component({
  selector: 'app-list-airline',
  templateUrl: './list-airline.component.html',
  styleUrls: ['./list-airline.component.css'],
})
export class ListAirlineComponent implements OnInit {
  airForm: FormGroup;
  origin: string;
  destiny: string;
  fare: AirFare;
  locations: LocationAir[];
  tfare;

  constructor(
    private fb: FormBuilder,
    private alerts: AlertsService,
    private listairservice: ListAirlineService
  ) {}

  ngOnInit(): void {
    this.listairservice.getAirlineList().subscribe((res: any) => {
      this.locations = res.data;
    });

    this.airForm = this.fb.group({
      origin: ['', [Validators.required]],
      destiny: ['', [Validators.required]],
      fares: ['', [Validators.required]],
    });
  }
  onSubmit(airForm: FormGroup): void {
    this.origin = airForm.get('origin').value;
    this.destiny = airForm.get('destiny').value;

    if (this.origin === this.destiny) {
      this.alerts.setMessage(
        'Destination and origin could not be same',
        'error'
      );
    } else {
      this.listairservice
        .getAirlinefare(this.origin, this.destiny)
        .subscribe((res: any) => {
          this.tfare = res.data.currency + ' : ' + res.data.amount;
        });
    }
  }
}
