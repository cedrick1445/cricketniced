import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataApiService {
public ewan = "ewan"
  constructor(

    public http : HttpClient
  ) { }

  getTeams(){
    return this.http.get('https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League')
  }
  getNews(){
    return this.http.get('https://www.thesportsdb.com/api/v1/json/1/eventspastleague.php?id=4328')
  }
  getSchedule(){
    return this.http.get('https://www.thesportsdb.com/api/v1/json/1/eventsnextleague.php?id=4328')
  }
  test(){
    this.http.request
  }


}
