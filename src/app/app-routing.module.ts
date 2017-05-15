import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HerolistComponent } from './components/herolist/herolist.component';
import { HerodetailsComponent } from './components/herodetails/herodetails.component';
import { HeroesComponent } from './components/heroes/heroes.component';


const routes: Routes = [
                        { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
                        { path: 'dashboard',  component: DashboardComponent },
                        { path: 'detail/:id', component: HerodetailsComponent },
                        { path: 'heroes',     component: HeroesComponent }];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
