import { Component, OnInit, Input, Output, EventEmitter, HostListener } from '@angular/core';
import { cardAnim } from '../../animations/card.animations';

@Component({
  selector: 'app-pro-item',
  templateUrl: './pro-item.component.html',
  styleUrls: ['./pro-item.component.scss'],
  animations: [
    cardAnim
  ]
})
export class ProItemComponent implements OnInit {

  @Input() item;
  @Output() onInvite = new EventEmitter<void>();
  @Output() onEdit = new EventEmitter<void>();
  @Output() onDel = new EventEmitter<void>();
  cardState = 'out';
  @HostListener('mouseenter')
  onmouseenter(){
    this.cardState = 'hover';
  }

  @HostListener('mouseleave')
  mouseleave(){
    this.cardState = 'out';
  }

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
