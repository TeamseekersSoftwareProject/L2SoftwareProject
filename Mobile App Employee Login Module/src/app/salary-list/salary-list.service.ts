import { Injectable } from '@angular/core';
import { SalaryList } from './salary-list.model';
import { BehaviorSubject, from } from 'rxjs';
import { take, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SalaryListService {
  
  private _salary = new BehaviorSubject<SalaryList[]>(
    [
      new SalaryList('s1', 1, 40000,100, 400, 300, 40, 50 ),
      new SalaryList('s2', 2, 60000, 200, 300, 500, 30, 20 )
     ]
  );

get salary() {
  return this._salary.asObservable();
}

getsalaryId(id: string){
  return this.salary.pipe(take(1), map(salary => {
    return {...salary.find(p => p.id === id)};
  }));
  
}

  constructor() { }
}
