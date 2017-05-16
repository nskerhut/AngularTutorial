import { Injectable } from '@angular/core';
import {Http } from '@angular/http';

import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';
@Injectable()
export class PowersService {

  constructor(private http:Http) { }

  getPowers():string[]{
      return ['Really Smart',
                        'Super Flexible',
                        'Super Hot',
                        'Weather Changer',
                        'Super Strength'];
          
  }
}
