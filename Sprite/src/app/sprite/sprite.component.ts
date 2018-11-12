import {Component,Input, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-sprite',
  templateUrl: './sprite.component.html',
  styleUrls: ['./sprite.component.css']
})
export class SpriteComponent implements OnInit {
  @Input("url")
  url: string;
  @Input()
  offsetX: number;
  @Input()
  offsetY: number;
  @Input("width")
  width: number;
  @Input("height")
  height: number;

  @Output('switch')
  switchNextIcon = new EventEmitter();

  handleClickSwitch(){
    this.switchNextIcon.emit('switch');
  }
  ngOnInit() {
    console.log('component created');
  }

}



