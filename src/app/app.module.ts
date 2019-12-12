import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TextMaskModule } from 'angular2-text-mask';
import { NgxMaskModule, IConfig } from 'ngx-mask';

export const options: Partial<IConfig> | (() => Partial<IConfig>) = {};
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, TextMaskModule, ReactiveFormsModule, FormsModule, NgxMaskModule.forRoot(options)],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
