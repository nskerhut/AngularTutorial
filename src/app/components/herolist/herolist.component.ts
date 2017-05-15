import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Hero } from '../../hero';
import { HeroService } from '../../services/hero.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-herolist',
  templateUrl: './herolist.component.html',
  styleUrls: ['./herolist.component.css'],
  providers: [HeroService]
})
export class HerolistComponent implements OnInit {
  private _selectedHero: Hero;
    @Output()
    onSelected: EventEmitter<Hero> = new EventEmitter<Hero>();
    
  heros:Hero[];
  constructor(
          private router: Router,
          private heroService: HeroService) {
      //this.heros = heroService.getHeroes();
  }
  
  getHeroes():void {
      //this.heros = this.heroService.getHeroes();
      this.heroService.getHeroes().then(heroes => this.heros = heroes);
  }
  gotoDetail() : void {
      //this.onSelected.emit(this._selectedHero);
      this.router.navigate(['/detail',this._selectedHero.id]);
  }
  
  onSelect(hero: Hero): void {
      //this.onSelected.emit(hero);
      this._selectedHero = hero;
  }
  
  get selectedHero():Hero {
     
      return this._selectedHero;
  }
  
  set selectedHero(hero:Hero){
      this._selectedHero = hero;
  }
  
  ngOnInit() {
      this.getHeroes();
  }

  add(name: string): void {
      name = name.trim();
      if(!name) {return;}
      
      this.heroService.create(name)
      .then(hero => {
          this.heros.push(hero);
          this._selectedHero = null;
      });
  }
  delete(hero: Hero): void {
      this.heroService.delete(hero.id)
      .then(() => {
          this.heros = this.heros.filter(h => h !== hero);
          if(this._selectedHero === hero) { this._selectedHero = null;}
      });
     
  }
}
