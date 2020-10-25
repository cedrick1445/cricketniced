import { DataApiService } from './../../service/data-api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-news',
  templateUrl: './view-news.component.html',
  styleUrls: ['./view-news.component.scss'],
})
export class ViewNewsComponent implements OnInit {

 
  fnews: any[];
  constructor(
    public dataApi: DataApiService
  ) { }
 

  ngOnInit() {
    this.readNews();
  }


  readNews(){
    this.dataApi.getNews().subscribe((data)=>{
      console.log(data['events'])
      this.fnews = data['events']
    })
  }
}
