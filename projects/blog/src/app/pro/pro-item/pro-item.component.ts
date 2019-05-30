import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pro-item',
  templateUrl: './pro-item.component.html',
  styleUrls: ['./pro-item.component.scss']
})
export class ProItemComponent implements OnInit {

  @Input() item;
  @Output() onInvite =new EventEmitter<void>();
  @Output() onEdit =new EventEmitter<void>();
  @Output() onDel =new EventEmitter<void>()
  constructor() { }

  ngOnInit() {
  }
  onInviteClick(){
    this.onInvite.emit();
  }
  onEditClick(){
    this.onEdit.emit();
  }

  onDelClick(){
    this.onDel.emit();
  }
}
