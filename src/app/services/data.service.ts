import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';
import { ComponentInterface } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private _http:HttpClient) { }

  getUsers():Observable<any>{
    return this._http.get<any>('https://jsonplaceholder.typicode.com/users');
  }

  getMenuOpts():Observable<any>{
    return this._http.get<ComponentInterface[]>('/assets/data/menu-opts.json');
  }
  getAlbums() {
    return this._http.get<any[]>('https://jsonplaceholder.typicode.com/albums');
  }

  getHeroes() {
    return this._http.get<ComponentInterface[]>('/assets/data/superheroes.json')
              .pipe(
                delay( 1500 )
              );
  }
}
