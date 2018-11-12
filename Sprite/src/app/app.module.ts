import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { SpriteComponent } from './sprite/sprite.component';
import { AppComponent } from './app/app.component';

@NgModule({
  declarations: [
    SpriteComponent,
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
