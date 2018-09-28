import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ResiduoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ResiduoProvider {

  constructor(public http: HttpClient) {
    console.log('Hello ResiduoProvider Provider');
  }
  obtenerResiduos(){
    return this.http.get('assets/data.json');
  }

}
