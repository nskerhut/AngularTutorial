import { Component, OnInit } from '@angular/core';
import { Hero } from '../../hero';
import { HerolistComponent } from '../herolist/herolist.component';
import { HerodetailsComponent } from '../herodetails/herodetails.component';

@Component({
  selector: 'heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  constructor() { }
  
  private _selectedHero:Hero;

  
  set hero(value:Hero){
      
      this._selectedHero = value;
  }
  
  get hero(): Hero {
      return this._selectedHero;
  }
  
  onSelected(hero: Hero){
      this._selectedHero=hero;
  }
  
  ngOnInit() {
  }

}
