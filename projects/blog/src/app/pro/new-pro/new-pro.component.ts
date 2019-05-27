import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import {OverlayContainer} from '@angular/cdk/overlay';

@Component({
  selector: 'app-new-pro',
  templateUrl: './new-pro.component.html',
  styleUrls: ['./new-pro.component.scss']
})
export class NewProComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) private data, 
    private dialogRef:MatDialogRef<NewProComponent>, 
    private oc:OverlayContainer
  ) {
    
   }

  ngOnInit() {
    console.log(this.data);
    this.oc.getContainerElement().classList.add(this.data.dark?'unicorn-dark-theme':null)
  }

  onClick(){
    this.dialogRef.close('i rep')
  }

}
