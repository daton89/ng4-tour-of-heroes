import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroesComponent } from './hero/heroes/heroes.component';
import { HeroDetailComponent } from './hero/hero-detail/hero-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/en/dashboard', pathMatch: 'full' },
  { path: 'en/dashboard', component: DashboardComponent, data: { lang: 'en' } },
  { path: 'it/cruscotto', component: DashboardComponent, data: { lang: 'it' } },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'heroes', component: HeroesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
