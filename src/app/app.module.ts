import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HerolistComponent } from './components/herolist/herolist.component';
import { HerodetailsComponent } from './components/herodetails/herodetails.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
@NgModule({
  declarations: [
    AppComponent,
    HerolistComponent,
    HerodetailsComponent,
    HeroesComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
                          {path:'heroes',component:HeroesComponent}
                          ,{path:'dashboard',component:DashboardComponent}
                          ,{path:'detail/:id',component:HerodetailsComponent}])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
