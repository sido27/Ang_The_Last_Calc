import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ComponentComponent } from './component/component.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentComponent 
   
  ],
  imports: [
    BrowserModule ,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
