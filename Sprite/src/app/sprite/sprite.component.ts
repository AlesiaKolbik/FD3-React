import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-sprite',
  templateUrl: './sprite.component.html',
  styleUrls: ['./sprite.component.css']
})
export class SpriteComponent implements OnInit {
  private _url: string = 'https://idg.net.ua/blog/wp-content/uploads/sprites2.png';
  private _offsetX: number = 100;
  private _offsetY: number = 98.5;
  private _width: number = 700;
  private _height: number = 197;
  private _classes = [
    'facebook', 'twitter', 'youtube',
    'instagram', 'linkIdn', 't', 'google',
    'facebook2', 'twitter2', 'youtube2',
    'linkIdn2', 't2', 'google2'];
  private _currentIndex = 0;

  getUrl(): string {
    return this._url;
  }

  getWidth(): number {
    return this._width;
  }

  getHeight(): number {
    return this._height;
  }
  getCssClass(){
    if(this._currentIndex === this._classes.length-1){
      this._currentIndex = 0;
    }
    return this._classes[this._currentIndex];
  }

  switchImg(): void {
    this._currentIndex += 1;
    // if(this._offsetX < this._width && this._offsetY === 0){
    //   this._offsetX -= this._iconWidth;
    // }
    // else if(this._offsetX > this._width && this._offsetY === 0){
    //   this._offsetX = 0;
    //   this._offsetY -= this._iconHeight;
    // }
    // else if((this._offsetX < this._width && this._offsetY !== 0)){
    //   this._offsetX -= this._iconWidth;
    // }
    // else if((this._offsetX > this._width && this._offsetY !== 0)){
    //   this._offsetX = 0;
    //   this._offsetY = 0;
    // }
  }

  ngOnInit() {
    console.log('component  is created');
  }

}


