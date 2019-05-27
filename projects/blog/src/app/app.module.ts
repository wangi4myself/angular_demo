import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {CoreModule} from './core/core.module'
import { AppComponent } from './app.component';
import { MatSidenavModule,MatListModule } from '@angular/material';
import { AppRoutingModule } from './app-routing.module'
import { LoginModule } from './login/login.module'
import { ProModule } from './pro/pro.module'

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    CoreModule,
    BrowserModule,
    MatSidenavModule,
    MatListModule,
    AppRoutingModule,
    LoginModule,
    ProModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
