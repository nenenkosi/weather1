import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ForecastProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ForecastProvider {

  constructor(public http: HttpClient) {




    
    console.log('Hello ForecastProvider Provider');
  }
  getForecust(cityname){

  
    let apikey = 'http://api.openweathermap.org/data/2.5/forecast?q='+ cityname + ',' +'southafrica&units=metric&APPID=b240fd59a48bf1db271d2f7e435ea633' ;
    
    return new Promise ((resolve, reject) => {
      this.http.get(apikey ).subscribe(data =>{
         resolve(data);
      })
    
   });
  }



}
