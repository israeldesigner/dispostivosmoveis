import { Component } from '@angular/core';

/**
 * Generated class for the PrevisaoComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'previsao',
  templateUrl: 'previsao.html'
})
export class PrevisaoComponent {

  text: string;

  constructor() {
    console.log('Hello PrevisaoComponent Component');
    this.text = 'Hello World';
  }

}
