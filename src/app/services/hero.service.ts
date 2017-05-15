import { Injectable } from '@angular/core';
import {Http, Headers } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Hero } from '../hero';


@Injectable()
export class HeroService {

    private uri = 'api/heroes';
    private headers = new Headers({'Content-Type': 'application/json'});
  constructor(private http: Http) { }
  
  getHeroes(): Promise<Hero[]>{
       return this.http.get(this.uri)
                       .toPromise()
                       .then(response => response.json().data as Hero[])
                       .catch(this.handleError);
  }
  private handleError(error:any): Promise<any>{
      console.error(error.message, error);
      return Promise.reject(error.message || error);
  }
  getHero(id:number):Promise<Hero> {
      const url = `${this.uri}/${id}`;
      return this.http.get(url)
          .toPromise()
          .then(response => response.json().data as Hero)
          .catch(this.handleError);
  }
  
  update(hero: Hero):Promise<Hero>{
      const url = `${this.uri}/${hero.id}`;
      
      return this.http
          .put(url, JSON.stringify(hero), {headers: this.headers})
          .toPromise()
          .then(() => hero)
          .catch(this.handleError);
  }
  create(name:string ):Promise<Hero>{
     
      return this.http
          .post(this.uri, JSON.stringify({name:name}),{headers: this.headers})
          .toPromise()
          .then(res => res.json().data as Hero)
          .catch(this.handleError);
  }
  delete(id:number): Promise<void>{
      const url = `${this.uri}/${id}`;
      
      return this.http.delete(url, {headers:this.headers})
          .toPromise()
          .then(() => null)
          .catch(this.handleError);
  }
}
