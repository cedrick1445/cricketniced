import { AlertController, Platform } from '@ionic/angular';
import { DataApiService } from './../../service/data-api.service';
import { Component, OnInit } from '@angular/core';
import { Plugins } from '@capacitor/core';
const { App } = Plugins;
@Component({
  selector: 'app-view-home',
  templateUrl: './view-home.component.html',
  styleUrls: ['./view-home.component.scss'],
})
export class ViewHomeComponent implements OnInit {
  title = "Foot Ball Teams";
  fteams: any[];

  constructor(
    private dataApi : DataApiService,
    private platform: Platform,
    private alertController: AlertController
    // private routerOutlet: IonRouterOutlet
    // private routerOutlet: IonRouterOutlet
    // private ionRouterOutlet: IonRouterOutlet,

 
  ) { 
<<<<<<< HEAD

    // if(this.platform.is('android')){
    //     App.exitApp()
    // }
=======
    
    // this.platform.backButton.subscribeWithPriority(-1, ()=>{
    //   if (!this.routerOutlet.canGoBack()){
    //     App.exitApp
    //   }
    // })
    
>>>>>>> bf3c3daab90c621bfcdb0411523f8c5d2c7ba162

  }



  ngOnInit() {
    this.readArticles();
  }



  async myExit() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Confirm!',
    
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Okay',
          handler: () => {
            App.exitApp();
          }
        }
      ]
    });

    await alert.present();
  }


  // myExit(){
  //   if(this.platform.is('android')){
  //     setTimeout(()=>{App.exitApp()},6000);
  //     this.alertController.cre
  //   }
  // }

  readArticles(){
    this.dataApi.getTeams().subscribe((data)=>{
      console.log(data)
      this.fteams = data['teams']
    })
  }
}
