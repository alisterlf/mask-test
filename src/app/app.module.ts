import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TextMaskModule } from 'angular2-text-mask';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, TextMaskModule, ReactiveFormsModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
