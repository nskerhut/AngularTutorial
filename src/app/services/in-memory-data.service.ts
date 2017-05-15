import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        let heroes = [
                      {id:11, name: 'Mr Freeze'}
                      ,{id:12, name:'Narco'}
                      ,{id:13, name:'Bombasto'}
                      ,{id:14, name:'Celeritas'}
                      ,{id:15, name:'Magenta'}
                      ,{id:16, name:'Spiderman'}
                      ,{id:17, name:'Superman'}
                      ,{id:18, name:'Donar'}
                      ];
        return {heroes};
    } 
}