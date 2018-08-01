import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { AddLopComponent } from './ad-log/ad-log.component';
import { TimeFilterPipe } from './time-filter.pipe';
import { AdMapComponent } from './ad-map/ad-map.component';

@NgModule({
  declarations: [
    AppComponent,
    AddLopComponent,
    TimeFilterPipe,
    AdMapComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
