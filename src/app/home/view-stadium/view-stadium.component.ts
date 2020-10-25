import { DataApiService } from './../../service/data-api.service';
import {ActivatedRoute} from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-view-stadium',
  templateUrl: './view-stadium.component.html',
  styleUrls: ['./view-stadium.component.scss'],
})
export class ViewStadiumComponent implements OnInit {
  tId;
  fteams: any[];
  isLoading = false;

  constructor(
    private dataApi : DataApiService,
    private ActivatedRoute : ActivatedRoute,
    private loadingController : LoadingController
  ) { }

  ngOnInit() {
   
    this.readTeam();
  }

  readTeam(){
    this.ActivatedRoute.params.subscribe((params)=>{
      console.log(params.id)
      this.tId = parseInt(params.id)
    });

    this.dataApi.getTeams().subscribe((data)=>{
      let myTeam = data['teams'].filter(teams => teams.idTeam == this.tId);
      console.log(myTeam);
      this.fteams = myTeam;
    });
  }

async loadmokoteam() {
  const loadmoko = await this.loadingController.create({
    duration: 1000,
    message: 'Please Wait ...'
  })
  await loadmoko.present();
}

  // segmentChanged(ev: any) {
  //   console.log('Segment changed', ev);
  // }
}
