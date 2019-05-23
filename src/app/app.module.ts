import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatGridListModule, MatCardModule, MatMenuModule, MatIconModule} from '@angular/material';

import { AppComponent } from './app.component';
import { LayoutModule } from '@angular/cdk/layout';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule, 
    MatCheckboxModule, MatGridListModule, MatCardModule, MatMenuModule, MatIconModule, LayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
