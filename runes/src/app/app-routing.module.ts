import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RunesComponent } from './runes/runes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RunesDetailComponent } from './runes-detail/runes-detail.component';
const routes: Routes = [
  { path: '', redirectTo: '/runes', pathMatch: 'full' },
  { path: 'detail/:id', component: RunesDetailComponent },
  { path: 'runes', component: RunesComponent },
  { path: 'dashboard', component: DashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }