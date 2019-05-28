import { NgModule } from '@angular/core';
import { TaskHomeComponent } from './task-home/task-home.component';
import { TaskItemComponent } from './task-item/task-item.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskHeaderComponent } from './task-header/task-header.component';
import { TaskRoutingModule } from './task-routing.moudule'
import { SharedModule } from '../shared/shared.module';
import { NewTaskComponent } from './new-task/new-task.component'

@NgModule({
  declarations: [TaskHomeComponent, TaskItemComponent, TaskListComponent, TaskHeaderComponent, NewTaskComponent],
  imports: [
    SharedModule,
    TaskRoutingModule
  ]
})
export class TaskModule { }
