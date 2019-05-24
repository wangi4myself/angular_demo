import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  darkTheme:boolean = false;
  swicthTheme(dark:boolean):void{
    this.darkTheme=dark
  }
}
