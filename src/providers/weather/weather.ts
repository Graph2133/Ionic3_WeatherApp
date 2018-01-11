import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
@Injectable()
export class WeatherProvider {
  private apiKey:string='542ffd081e67f4512b705f89d2a611b2'; 
  private url:string ='';
  constructor(public http: HttpClient) {
    this.url ='http://api.openweathermap.org/data/2.5/weather?q=';
  }

  getWeather (country,city){
    return this.http.get('http://api.openweathermap.org/data/2.5/weather?q='+city+','+country+'&units=metric&APPID='+this.apiKey).map((res:Response)=>res).catch((error:any) => Observable.throw(error.error+ 'Server error'));
  }
   getWeatherForcast (country,city){
    return this.http.get('http://api.openweathermap.org/data/2.5/forecast?q='+city+','+country+'&units=metric&APPID='+this.apiKey).map((res:Response)=>res).catch((error:any) => Observable.throw(error.error+ 'Server error'));
  }
   getWeatherNextWeek (country,city){
    return this.http.get('http://api.openweathermap.org/data/2.5/forecast/daily?q='+city+','+country+'&units=metric&APPID='+this.apiKey+'&cnt=7').map((res:Response)=>res).catch((error:any) => Observable.throw(error.error+ 'Server error'));
  }

}
