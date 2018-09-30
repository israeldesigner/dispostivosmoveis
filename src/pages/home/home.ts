import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  
  items = [
    {
      dia:"DOMINGO",
      clima:"sol",
      icone:"ios-sunny-outline",
      tempMax: 30,
      tempMin: 18
  },
  {
      dia:"SEGUNDA",
      clima:"chuva",
      icone:"ios-rainy-outline",
      tempMax: 24,
      tempMin: 22
  },
  {
      dia:"TERÇA",
      clima:"ensolorado",
      icone:"ios-sunny-outline",
      tempMax: 33,
      tempMin: 28
  },
  {
      dia:"QUARTA",
      clima:"Nublado",
      icone:"ios-cloudy-outline",
      tempMax: 28,
      tempMin: 22
  }, 
  {
      dia:"QUINTA",
      clima:"sol",
      icone:"ios-sunny-outline",
      tempMax: 32,
      tempMin: 28
  },
  {
      dia:"SEXTA",
      clima:"chuva",
      icone:"ios-rainy-outline",
      tempMax: 21,
      tempMin: 19
  },
  {
      dia:"SÁBADO",
      clima:"ensolorado",
      icone:"ios-cloudy-outline",
      tempMax: 28,
      tempMin: 22
  }  
  ];

  itemSelected(item: string) {
    console.log("Selected Item", item);
  }

  constructor(public navCtrl: NavController) {

    
  }

}
