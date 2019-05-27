import {
  NgModule
} from '@angular/core';
// import { CommonModule } from '@angular/common';
import {
  LoginComponent
} from './login/login.component';
import {
  LoginRoutingModule
} from './login-routing-module'
import {
  SharedModule
} from '../shared/shared.module';
import {
  RegisterComponent
} from './register/register.component'

@NgModule({
  declarations: [LoginComponent, RegisterComponent],
  imports: [
    SharedModule,
    LoginRoutingModule,
  ]
})
export class LoginModule {}
