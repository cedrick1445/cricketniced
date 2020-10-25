import { DataApiService } from './../../service/data-api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-schedule',
  templateUrl: './view-schedule.component.html',
  styleUrls: ['./view-schedule.component.scss'],
})
export class ViewScheduleComponent implements OnInit {

  fschedule:any[];

  constructor(
    public dataApi:DataApiService
  ) { }

  ngOnInit() {
    this.readSchedule();
    }


    readSchedule(){
      this.dataApi.getSchedule().subscribe((data)=>{
      console.log(data['events'])
      this.fschedule=data['events']
      })

    }
}
