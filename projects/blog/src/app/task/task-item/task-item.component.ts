import { Component, OnInit, Input, Output, EventEmitter, HostListener } from '@angular/core';
import { tasksAnim } from '../../animations/card.animations'

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss'],
  animations:[
    tasksAnim
  ]
})
export class TaskItemComponent implements OnInit {

  @Input() item;
  @Input() avatar;
  @Output() taskClick =new EventEmitter<void>();
  widerPriority='in'
  @HostListener('mouseenter')
  onmouseenter(){
    this.widerPriority='out'
  }
  @HostListener('mouseleave')
  mouseleave(){
    this.widerPriority='in'
  }

  constructor() { }

  ngOnInit() {
    this.avatar=this.item.owner?this.item.owner.avatar:'unassigned';
  }

  onItemClick(){
    this.taskClick.emit()
  }

  stop(ev:Event){
    debugger;
    ev.stopPropagation()
  }

}
