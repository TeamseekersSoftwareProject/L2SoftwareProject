import { Component, OnInit, OnDestroy } from '@angular/core';
import { SalaryListService } from './salary-list.service';
import { SalaryList } from './salary-list.model';
import {  Subscription } from 'rxjs';

@Component({
  selector: 'app-salary-list',
  templateUrl: './salary-list.page.html',
  styleUrls: ['./salary-list.page.scss'],
})
export class SalaryListPage implements OnInit, OnDestroy {
 loadedSalary: SalaryList[];
 private salarySub: Subscription;

  constructor(private slaryListService: SalaryListService) { }

  ngOnInit() {
  this.salarySub =  this.slaryListService.salary.subscribe(salary => {
      this.loadedSalary = salary;
    });
  
  }

  ngOnDestroy() {
    if(this.salarySub) {
      this.salarySub.unsubscribe();
    }
  }

}
