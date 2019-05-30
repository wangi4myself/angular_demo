import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-new-pro',
  templateUrl: './new-pro.component.html',
  styleUrls: ['./new-pro.component.scss']
})
export class NewProComponent implements OnInit {
  title:string;
  constructor(
    @Inject(MAT_DIALOG_DATA) private data, 
    private dialogRef:MatDialogRef<NewProComponent>, 
  ) {
    
   }

  ngOnInit() {
    // console.log(this.data);
    this.title=this.data.title
  }

  onClick(){
    this.dialogRef.close('i rep')
  }

}
