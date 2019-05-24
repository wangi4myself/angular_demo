import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() toggle=new EventEmitter<void>();
  @Output() toggleDartTheme=new EventEmitter<boolean>();
  constructor() {
    
  }

  ngOnInit() {
    
  }

  openSlideBar():void{
    this.toggle.emit();
  }

  onChange(checked:boolean):void{
    this.toggleDartTheme.emit(checked)
  }

}
