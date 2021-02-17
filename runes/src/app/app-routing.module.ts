import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RunesComponent } from './runes/runes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RunesDetailComponent } from './runes-detail/runes-detail.component';
import { SentencesComponent } from './sentences/sentences.component';
import { RunesSearchComponent } from './runes-search/runes-search.component';
const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'detail/:id', component: RunesDetailComponent },
  { path: 'runes', component: RunesComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: "sentences", component: SentencesComponent},
  { path: "research", component: RunesSearchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }