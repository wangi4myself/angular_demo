import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  items:string[];
  constructor() { }

  ngOnInit() {
    const nums=(new Array(16).fill(0)).map((_,d)=>d+1);
    debugger
    this.items=nums.map(d=>`avatars:svg-${d}`);
  }

}
