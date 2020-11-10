import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListAirlineComponent } from './airline/list-airline.component';
import { TotallistComponent } from './airline/totallist.component';

const routes: Routes = [
  { path: 'search', component: ListAirlineComponent },
  { path: 'list', component: TotallistComponent },
  { path: '', redirectTo: '/search', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
