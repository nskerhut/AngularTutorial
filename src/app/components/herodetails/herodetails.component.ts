import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { Hero } from '../../hero';

import {HeroService} from '../../services/hero.service';
@Component({
  selector: 'app-herodetails',
  templateUrl: './herodetails.component.html',
  styleUrls: ['./herodetails.component.css'],
  providers: [HeroService]
})
export class HerodetailsComponent implements OnInit {

  private _hero : Hero;
  
  constructor(
          private service:HeroService,
          private location:Location,
          private route:ActivatedRoute
          ) { }

  @Input()
  set hero(hero: Hero){
      this._hero = hero;
  }
  
  get hero(){
      return this._hero;
  }
  ngOnInit() {
      this.route.params
          .switchMap((params:Params) => this.service.getHero(+params['id']))
          .subscribe(hero => this.hero = hero)
  }

  goBack():void{
      this.location.back();
  }
  save():void{
      this.service.update(this.hero).then(()=> this.goBack());
  }
  
}
