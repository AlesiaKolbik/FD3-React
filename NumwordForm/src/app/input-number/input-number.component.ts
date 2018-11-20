import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-input-number',
  templateUrl: './input-number.component.html',
  styleUrls: ['./input-number.component.css']
})
export class InputNumberComponent{

  @Output('inputNumber')
  private inputNumber = new EventEmitter();

  onClick(e:HTMLInputElement){
    this.inputNumber.emit(e);
  }
}
