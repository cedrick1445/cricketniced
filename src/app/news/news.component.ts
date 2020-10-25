import { DataApiService } from './../service/data-api.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
})
export class NewsComponent implements OnInit {

  fnews: any[];
  constructor(
    private dataApi: DataApiService
  ) { }
 

  ngOnInit() {
    this.readNews();
  }


  readNews(){
    this.dataApi.getNews().subscribe((data)=>{
      console.log(data)
      this.fnews = data['news']
    })
  }
}
