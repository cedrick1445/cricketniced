import { DataApiService } from './../service/data-api.service';
import { Component } from '@angular/core';
import { Platform, ToastController } from '@ionic/angular';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  title = "Foot Ball Teams";
  ewanKo;

  fteams: any[];
  fnews: any[];
  private _location: any;

  constructor(
    private dataApi : DataApiService,
    private platform: Platform,
    private toastController: ToastController
    

  ) {
    
  }
  ionViewDidEnter() {
  //   this.subscription = this.platform.backButton.subscribe(()=>{
  //     navigator['app'].exitApp();
  // });
  }

  readArticles(){
    this.dataApi.getTeams().subscribe((data)=>{
      this.fteams = data['teams']
    })
  }

  readNews(){
    this.dataApi.getNews().subscribe((data)=>{
      // console.log(data)
      this.fnews = data['news']
    })
  }

  

}
