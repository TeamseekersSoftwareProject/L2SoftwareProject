import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SalaryListService } from '../salary-list.service';
import { NavController } from '@ionic/angular';
import { SalaryList } from '../salary-list.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-salary-details',
  templateUrl: './salary-details.page.html',
  styleUrls: ['./salary-details.page.scss'],
})
export class SalaryDetailsPage implements OnInit, OnDestroy {
 salaryDetails: SalaryList;
 private salarySub: Subscription;

  constructor(
    private roure: ActivatedRoute,
    private salaryListService: SalaryListService,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
    this.roure.paramMap.subscribe(paramMap => {
      console.log(paramMap);
      if (!paramMap.has('salaryId')) {
        this.navCtrl.navigateBack('/salary');
        return;
      }
      this.salarySub =  this.salaryListService.getsalaryId(paramMap.get('salaryId')).subscribe(salary => {
         this.salaryDetails = salary;
       });
    });
  }
 
  ngOnDestroy() {
if (this.salarySub) {
  this.salarySub.unsubscribe();
}
  }

}
