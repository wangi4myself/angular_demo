import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ProListComponent } from './pro-list/pro-list.component';
import { ProItemComponent } from './pro-item/pro-item.component';
import { NewProComponent } from './new-pro/new-pro.component';
import { InviteComponent } from './invite/invite.component';
import { ProRoutingModule } from './pro-routing.module'

@NgModule({
  declarations: [ProListComponent, ProItemComponent, NewProComponent, InviteComponent],
  imports: [
    SharedModule,
    ProRoutingModule
  ],
  entryComponents:[
    NewProComponent,
    InviteComponent
  ]
})
export class ProModule { }
