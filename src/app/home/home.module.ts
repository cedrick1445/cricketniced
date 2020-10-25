import { ViewScheduleComponent } from './view-schedule/view-schedule.component';
import { ViewNewsComponent } from './view-news/view-news.component';
import { ViewStandingComponent } from './view-standing/view-standing.component';
import { ViewStadiumComponent } from './view-stadium/view-stadium.component';
import { ViewTeamComponent } from './view-team/view-team.component';
import { ViewHomeComponent } from './view-home/view-home.component';
import { SideBarComponent } from './../component/side-bar/side-bar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [
    HomePage,
    SideBarComponent,
    ViewHomeComponent,
    ViewTeamComponent,
    ViewStadiumComponent,
    ViewStandingComponent,
    ViewNewsComponent,
    ViewScheduleComponent,
  ]
})
export class HomePageModule {}
