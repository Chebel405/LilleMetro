import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page {
  ApiKey = '5835265ca4b30f8639aebe957d08b93ff78b34e1453cfee0b56d8cef';
  infoData = {
    
  }
  URI = ' /api/records/1.0/search/?dataset=box-a-velos-a-lille-lomme-et-hellemmes&q=&facet=quartier';


  constructor(public http: HttpClient) {

  }

  readApi(URL: string) {
    return this.http.get(URL);
  }

}
