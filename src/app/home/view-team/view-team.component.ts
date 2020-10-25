import { DataApiService } from './../../service/data-api.service';
import {ActivatedRoute} from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';



@Component({
  selector: 'app-view-team',
  templateUrl: './view-team.component.html',
  styleUrls: ['./view-team.component.scss'],
})
export class ViewTeamComponent implements OnInit {
  tId;
  fteams: any[];
  isLoading = false;

  constructor(
    private dataApi : DataApiService,
    private ActivatedRoute : ActivatedRoute,
    private loadingController : LoadingController
  ) { }

  ngOnInit() {
    this.showHideAutoLoader();
    this.readTeam();
  }

  readTeam(){
    this.ActivatedRoute.params.subscribe((params)=>{
      console.log(params.id)
      this.tId = parseInt(params.id)
    });

    this.dataApi.getTeams().subscribe((data)=>{
      let myTeam = data['teams'].filter(teams => teams.idTeam == this.tId)
      console.log(myTeam)
      this.fteams = myTeam;
    });
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

