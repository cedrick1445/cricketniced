import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

<<<<<<< HEAD
import { IonicModule, Platform } from '@ionic/angular';
=======
import { IonicModule,  Platform } from '@ionic/angular';
>>>>>>> bf3c3daab90c621bfcdb0411523f8c5d2c7ba162
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Platform
<<<<<<< HEAD
  
=======
>>>>>>> bf3c3daab90c621bfcdb0411523f8c5d2c7ba162
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
