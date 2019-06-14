import { Component, OnInit, HostBinding } from '@angular/core';
import { MatDialog } from '@angular/material';
import { NewTaskComponent } from '../new-task/new-task.component';
import { CopyTaskComponent } from '../copy-task/copy-task.component';
import { ConfirmDialogComponent } from '../../shared/confirm-dialog/confirm-dialog.component';
import { NewTaskListComponent } from '../new-task-list/new-task-list.component';
import { SlideToRight } from '../../animations/card.animations'

@Component({
  selector: 'app-task-home',
  templateUrl: './task-home.component.html',
  styleUrls: ['./task-home.component.scss'],
  animations:[SlideToRight]
})
export class TaskHomeComponent implements OnInit {
  @HostBinding('@routeAnim') state;

  lists=[
    {
      id:1,
      name:'待办',
      tasks:[
        {
          id:1,
          desc:'任务1',
          completed:true,
          owner:{
            id:1,
            name:'wangwu',
            avatar:'avatars:svg-13'
          },
          priority:1,
          dueDate:'2019-5-1'
        },
        {
          id:2,
          desc:'老板让完成的任务，不完成就要祭天你信不信',
          completed:false,
          owner:{
            id:1,
            name:'lisi',
            avatar:'avatars:svg-12'
          },
          dueDate:'2019-5-1'
        }
      ]
    },
    {
      id:2,
      name:'进行中',
      tasks:[
        {
          id:1,
          desc:'任务3',
          completed:true,
          owner:{
            id:1,
            name:'wangwu',
            avatar:'avatars:svg-13'
          },
          dueDate:'2019-5-1',
          reminder:'2019-5-20'
        },
        {
          id:2,
          desc:'任务4',
          completed:false,
          owner:{
            id:1,
            name:'lisi',
            avatar:'avatars:svg-12'
          },
          dueDate:'2019-5-1'
        }
      ]
    }
  ];
  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

  lanchNewTaskDialog(){
    this.dialog.open(NewTaskComponent,{data:{
      title:'新建任务',
    }})
  }

  lanchCopyTaskDialog(){
    const dialogRef=this.dialog.open(CopyTaskComponent,{data:{lists:this.lists}})
  }

  lanchUpdateTaskDialog(task){
    this.dialog.open(NewTaskComponent,{data:{
      title:'修改任务',
      task:task
    }})
  }

  lanchConfirmDialog(){
    const dialogRef=this.dialog.open(ConfirmDialogComponent,{data:{
      title:'修改任务',
      content:'确认删除该任务吗？'
    }})
    dialogRef.afterClosed().subscribe(result=>console.log('==>',result))
  }

  lanchEditListDialog(){
    const dialogRef=this.dialog.open(NewTaskListComponent,{data:{
      title:'更改任务列表',
    }})
    // dialogRef.afterClosed().subscribe(result=>console.log('==>',result))
  }

  lanchNewListDialog(){
    const dialogRef=this.dialog.open(NewTaskListComponent,{data:{
      title:'新建任务列表',
    }})
    // dialogRef.afterClosed().subscribe(result=>console.log('==>',result))
  }

}
