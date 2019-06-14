import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {CoreModule} from './core/core.module';
import { AppComponent } from './app.component';
// import { MatSidenavModule, MatListModule } from '@angular/material';
import { LoginModule } from './login/login.module';
import { ProModule } from './pro/pro.module';
import { TaskModule } from './task/task.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    CoreModule,
    BrowserModule,
    SharedModule,
    LoginModule,
    ProModule,
    TaskModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
