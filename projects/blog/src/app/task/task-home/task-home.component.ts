import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-home',
  templateUrl: './task-home.component.html',
  styleUrls: ['./task-home.component.scss']
})
export class TaskHomeComponent implements OnInit {
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
  constructor() { }

  ngOnInit() {
  }

}
