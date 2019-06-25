import { Component, OnInit, OnDestroy } from '@angular/core';
import { HomeService } from './home.service';
import { Home } from './home.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit, OnDestroy{
loadedHome: Home[];
private homeSub: Subscription;
constructor(private homeService: HomeService) {

}

ngOnInit() {
  this.homeSub = this.homeService.home.subscribe(home => {
    this.loadedHome = home;
  })

}

ionViewWillEnter() {
  this.homeService.fetchHome().subscribe();
}

ngOnDestroy() {
  if(this.homeSub) {
    this.homeSub.unsubscribe();
  }
}

}
