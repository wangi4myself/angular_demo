import { Component } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  darkTheme:boolean = false;
  constructor(private oc:OverlayContainer){

  }
  swicthTheme(dark:boolean):void{
    this.darkTheme=dark;
    dark?this.oc.getContainerElement().classList.add('unicorn-dark-theme'):this.oc.getContainerElement().classList.remove('unicorn-dark-theme')
  }
}
