import { Component } from '@angular/core';
import { NavController, ModalController} from 'ionic-angular';
import { ForecastProvider } from '../../providers/forecast/forecast';
import { ListPage } from '../list/list';
import arrr from '../home/arrr'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  arr=[];
  test = [];
  data:any;
  weather:any[];
  main;
  name;
  temp;
  icon;
  img;
  condition;
  hum;
  dt;
  
  constructor(public navCtrl: NavController, private provFore: ForecastProvider, public modalCtrl: ModalController) {
   this.getWeather('Johannesburg');
  }

  getWeather(cityname) {
    this.provFore.getForecust(cityname)
    .then((data:any )=> {
      
      this.data = data;  
      this.weather = this.data.weather;
      console.log(this.data);

      
      this.test = data.list;
     this.arr[0] =  this.test[0].weather[0];
     this.arr.forEach(i => {
      console.log(i.description);
      this.condition= i.description;
     });
     this.test = data.list;
     this.arr[0] =  this.test[0].weather[0];
     this.arr.forEach(i => {
      console.log(i.icon);
      this.icon= i.icon;
     });
     
      let name = data.city.name
      this.name =data.city.name;
      let temp = Math.round(data.list[9].main.temp) + '°c' ;
      this.temp =Math.round(data.list[9].main.temp) + '°c' ;
      let dt =data.list[0].dt_txt ;
      this.dt =data.list[0].dt_txt ;
      this.hum =data.list[0].main.humidity + '%' ;
      if (this.icon === "01d") {
        this.img = '../assets/imgs/Sunny.png';
  
      } else if (this.icon === "10d") {
        this.img = '../../assets/imgs/Rain.png';
      
      } else if (this.icon === "02d") {
        this.img = '../../assets/imgs/PartlyCloudy.png';
       
      } else if (this.icon === "50d") {
        this.img = '../../assets/imgs/mist.png';
       
      } else if (this.icon === "04d") {
        this.img = '../../assets/imgs/broken.png';
     
      } else if (this.icon === "09d") {
        this.img = '../../assets/icon/09d.png';
       
        
    }
    let obj = new display(name,temp,dt);
    arrr.push(obj);
    console.log
    

    });
   
  }
  more(){
    
    const modal = this.modalCtrl.create(ListPage);
  
    modal.present();
  }
}
export class display{
  name;
  temp;
  dt;
 
 constructor(name,temp,dt) {
    this.name= name;
    this.temp= temp;
    this.dt= dt;
 }}