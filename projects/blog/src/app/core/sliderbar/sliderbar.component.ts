import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sliderbar',
  templateUrl: './sliderbar.component.html',
  styleUrls: ['./sliderbar.component.scss']
})
export class SliderbarComponent implements OnInit {
  @Output() navClick = new EventEmitter<void>();
  constructor() { }

  ngOnInit() {
  }
  onNavClick() {
    this.navClick.emit();
  }
}
