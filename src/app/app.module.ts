import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListAirlineComponent } from './airline/list-airline.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AlertsModule } from 'angular-alert-module';
import { TotallistComponent } from './airline/totallist.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [AppComponent, ListAirlineComponent, TotallistComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AlertsModule.forRoot(),
    MatFormFieldModule,
    MatTableModule,
    MatPaginatorModule,
    MatInputModule,
  ],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
