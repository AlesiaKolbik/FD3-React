import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-sprite',
  templateUrl: './sprite.component.html',
  styleUrls: ['./sprite.component.css']
})
export class SpriteComponent implements OnInit {
  private _url: string = 'https://idg.net.ua/blog/wp-content/uploads/sprites2.png';
  private _offsetX: number = 0;
  private _offsetY: number = 0;
  private _width: number = 700;
  private _height: number = 197;
  private _iconWidth: number = 100;
  private _iconHeight: number = 98.5;


  getUrl(): string {
    return this._url;
  }

  getWidth(): number {
    return this._width;
  }

  getHeight(): number {
    return this._height;
  }
  getCoordX(){
    return this._offsetX + 'px';
  };
  getCoordY(){
    return this._offsetY + 'px';
  };
  switchImg(): void {
    if(Math.abs(this._offsetX) < (this._width - this._iconWidth) && this._offsetY === 0){
      this._offsetX -= this._iconWidth;
    }
    else if(Math.abs(this._offsetX) >= (this._width -this._iconWidth) && this._offsetY === 0){
      this._offsetX = 0;
      this._offsetY -= this._iconHeight;
    }
    else if(Math.abs(this._offsetX)< (this._width - this._iconWidth) && this._offsetY !== this._iconHeight){
      this._offsetX -= this._iconWidth;
    }
    else if(Math.abs(this._offsetX)>= (this._width - this._iconWidth) && this._offsetY !== this._iconHeight){
      this._offsetX = 0;
      this._offsetY = 0;
    }
  }

  ngOnInit() {
    console.log('component created');
  }

}


