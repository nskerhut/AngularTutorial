import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppComponent } from './app.component';
import { HerolistComponent } from './components/herolist/herolist.component';
import { HerodetailsComponent } from './components/herodetails/herodetails.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

import { InMemoryDataService } from './services/in-memory-data.service';

import { AppRoutingModule } from './app-routing.module';
import { SearchComponentComponent } from './components/search-component/search-component.component';
import { HeroFormComponent } from './components/hero-form/hero-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HerolistComponent,
    HerodetailsComponent,
    HeroesComponent,
    DashboardComponent,
    SearchComponentComponent,
    HeroFormComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService)
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
