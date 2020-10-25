import { ViewScheduleComponent } from './view-schedule/view-schedule.component';
import { ViewStandingComponent } from './view-standing/view-standing.component';
import { ViewNewsComponent } from './view-news/view-news.component';
import { NewsComponent } from './../news/news.component';
import { ViewStadiumComponent } from './view-stadium/view-stadium.component';
import { ViewTeamComponent } from './view-team/view-team.component';
import { ViewHomeComponent } from './view-home/view-home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children : [
      {
        path:'',
        component:ViewHomeComponent
      },
      {
        path : 'team/:id',
        component : ViewTeamComponent
        
      },
      {
        path : 'stadium/:id',
        component : ViewStadiumComponent
        
      },
      {
        path : 'standing',
        component : ViewStandingComponent
        
      },
      {
        path : 'news',
        component: ViewNewsComponent
      },
      {
        path : 'schedule',
        component: ViewScheduleComponent
      }

    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
