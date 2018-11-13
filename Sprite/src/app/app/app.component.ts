import {Component} from '@angular/core';

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  private _url: string = 'https://idg.net.ua/blog/wp-content/uploads/sprites2.png';
  private _offsetX: number = 0;
  private _offsetY: number = 0;
  private _width: number = 700;
  private _height: number = 197;
  private _iconWidth: number = 100;
  private _iconHeight: number = 98.5;

  getUrl(){
    return this._url;
  }
  getOffsetX(){
    return this._offsetX;
  }
  getOffsetY(){
    return this._offsetY;
  }
  getWidth(){
    return this._width;
  }
  getHeight(){
    return this._height;
  }
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

}
