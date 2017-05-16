import { Component, OnInit } from '@angular/core';
import { Hero } from '../../hero';
import {PowersService} from '../../services/powers.service';
import { Observable }     from 'rxjs/Observable';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css'],
  providers: [PowersService]
})
export class HeroFormComponent implements OnInit {

    model: Hero = new Hero(1,'','','');
    availablePowers:string[]; 
    submitted = false;
    onSubmit() {
        alert("Welcome " + this.model.name);
        this.submitted = true;
        }
    
    get diagnositic() { return JSON.stringify(this.model);}
  constructor(private service: PowersService) { }

  ngOnInit() {
      
      this.availablePowers = this.service.getPowers();
      
      
  }

}
