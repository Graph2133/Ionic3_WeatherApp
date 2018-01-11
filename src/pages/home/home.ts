import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WeatherProvider } from "../../providers/weather/weather";
import { Storage } from "@ionic/storage";
import { LoadingController } from 'ionic-angular';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'

})

export class HomePage {
  private weather: any;
  private location: {
    country: string,
    city: string
  }
  private WeatherForecast: any;
  private WeatherForecastNextWeek: any;
  private imgWeather = "http://openweathermap.org/img/w/01d.png";
  private titleNext: string = "Detailed forecast (5 days)";
  private titleNextWeek: string = "Next week forecast";


  constructor(public navCtrl: NavController,
    public weatherProvider: WeatherProvider,
    public storage: Storage,
    public loadingCtrl: LoadingController) {

  }

  ionViewWillEnter() {
    let loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 1500
    });
    this.storage.get('location').then(res => {
      if (res != null) {
        this.location = JSON.parse(res);
      } else {
        this.location = {
          country: 'Ukraine',
          city: 'Lviv'
        }
      }
      loader.present();
      this.weatherProvider.getWeather(this.location.country, this.location.city).subscribe((res) => {
        this.weather = res;
        this.imgWeather = "http://openweathermap.org/img/w/" + res.weather[0].icon + ".png";
      });
      this.weatherProvider.getWeatherForcast(this.location.country, this.location.city).subscribe((res) => {
        this.WeatherForecast = res.list;

      });
      this.weatherProvider.getWeatherNextWeek(this.location.country, this.location.city).subscribe((res) => {
        this.WeatherForecastNextWeek = res.list;
      });
    })

  }



}
