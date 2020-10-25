import { Component, OnInit } from '@angular/core';
import { DataApiService } from './../../service/data-api.service';
import {ActivatedRoute} from '@angular/router';
import { LoadingController } from '@ionic/angular'

@Component({
  selector: 'app-view-standing',
  templateUrl: './view-standing.component.html',
  styleUrls: ['./view-standing.component.scss'],
})
export class ViewStandingComponent implements OnInit {
  tId;
  fteams: any[];
  isLoading = false;

  constructor(
    private dataApi : DataApiService,
    private ActivatedRoute : ActivatedRoute,
    private loadingController : LoadingController
  ) { }

  ngOnInit() {
  
  }

  showHideAutoLoader(){
    this.loadingController.create({
      message: 'Loading Data',
      duration: 2000
    }).then((res) =>{
      res.present();

      res.onDidDismiss().then((dis)=>{
        console.log('Loading dismissed! after 2 seconds', dis);
        this.isLoading = true

      });
    });
  }

async loadmokoteam() {
  const loadmoko = await this.loadingController.create({
    duration: 1000,
    message: 'Please Wait ...'
  })
  await loadmoko.present();
}
readArticles(){
  this.dataApi.getTeams().subscribe((data)=>{
    console.log(data)
    this.fteams = data['teams']
  })
}

  // segmentChanged(ev: any) {
  //   console.log('Segment changed', ev);
  // }
}
