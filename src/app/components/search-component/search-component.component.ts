import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';
// Observable class extensions
import 'rxjs/add/observable/of';
// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import { Hero } from '../../hero';
import { HeroSearchService } from '../../services/hero-search.service';

@Component({
  selector: 'hero-search',
  templateUrl: './search-component.component.html',
  styleUrls: ['./search-component.component.css'],
  providers:[HeroSearchService]
})
export class SearchComponentComponent implements OnInit {

    heroes: Observable<Hero[]>;

    private searchTerms = new Subject<string>();
  
    constructor(
            private heroSearchService: HeroSearchService,
            private router: Router) { }

    search(term: string):void {
        this.searchTerms.next(term);
    }
    gotoDetail(hero: Hero): void {
        //alert(`detail ${hero.name} ${hero.id}`)
        let link = ['/detail',hero.id];
        this.router.navigate(link);
    }
  ngOnInit() {
      this.heroes = this.searchTerms
          .debounceTime(300)
          .distinctUntilChanged()
          .switchMap(term => term ? this.heroSearchService.search(term) : Observable.of<Hero[]>([]))
          .catch(error => {
              console.log(error);
              return Observable.of<Hero[]>([]);
          });
  
  }

}
