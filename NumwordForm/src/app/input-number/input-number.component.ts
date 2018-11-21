import {Component, ElementRef, EventEmitter, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-input-number',
  templateUrl: './input-number.component.html',
  styleUrls: ['./input-number.component.css']
})
export class InputNumberComponent{

  @ViewChild('inputNumber')inputNumberElemRef:ElementRef;

  @Output('inputNumber')
  private inputNumber = new EventEmitter<number>();

  onClick(){
    this.inputNumber.emit(this.inputNumberElemRef.nativeElement.value);
  }
}
