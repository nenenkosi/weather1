import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import { ForecastProvider } from '../../providers/forecast/forecast';
import arrr from '../home/arrr'
@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  // dt;
  // img;
  // temp;
  // icon;
  // arr=[];
  // test=[];
  // data=[];
  // name;
  constructor(public navCtrl: NavController, private provFore: ForecastProvider, public navParams: NavParams) {

   }
   

   obj :any = this.navParams.get("obj");
   
   city =arrr[0].name;
   temp = arrr[0].temp;
   dt = arrr[0].dt;
   
  asdf(){
    this.navCtrl.pop()
  }
}