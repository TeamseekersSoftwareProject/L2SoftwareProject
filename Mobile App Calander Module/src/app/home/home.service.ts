import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Home } from './home.model';
import { HttpClient } from '@angular/common/http';
import {  tap, map, reduce } from 'rxjs/operators';

interface HomeData {
  id: number;
  title: string;
  created_at: string;
  updated_at: string;
}

// new Home(1,'test1','2019-05-26 16:48:59', '2019-05-26 16:48:59'),
// new Home(2,'test2','2019-05-26 16:48:59', '2019-05-26 16:48:59')

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }


  private _home = new BehaviorSubject<Home[]>([]);

  get home() {
    return this._home.asObservable();
  }

  fetchHome() {
   return this.http.get<{[key: number]: HomeData}>('http://localhost:8000/api/tasks')
    .pipe(map(resData => {
      console.log(resData);
      const homes = [];
      for (const key in resData) {
        console.log(key);
        if (resData.hasOwnProperty(key)) {
          homes.push(new Home(resData[key].id,  resData[key].title,
            resData[key].created_at, resData[key].updated_at
            ));
        }
      }
      return homes;
    }),
    tap(home => {
      this._home.next(home);
    })
    );
  }
}
