import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-display-input-text',
  templateUrl: './display-input-text.component.html',
  styleUrls: ['./display-input-text.component.css']
})
export class DisplayInputTextComponent{

  constructor() { }

  @Input('inputNumber')
  public inputNumber:number;

}
