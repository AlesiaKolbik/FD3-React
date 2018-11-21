import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'NumwordForm';

  private inputNumber:number = 0;

  getInputNumber():number{
    return this.inputNumber;
  }
  setInputNumber(number:number){
    this.inputNumber = number;
  }
}
