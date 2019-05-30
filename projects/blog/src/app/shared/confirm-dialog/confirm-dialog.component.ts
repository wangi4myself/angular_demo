import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-confirm-dialog',
  template: `
  <form class="example-form">
    <h2 mat-dialog-title>{{title}}</h2>
    <div mat-dialog-content>
      {{content}}
    </div>
    <div mat-dialog-actions>
      <button mat-raised-button color="primary" type="button" (click)="onClick(true)">确定</button>
      <button mat-button mat-dialog-close type="button" (click)="onClick(false)">取消</button>
    </div>
  </form>
  `,
  styles: []
})
export class ConfirmDialogComponent implements OnInit {
  title:string;
  content:string;
  constructor(
    private dialogRef:MatDialogRef<ConfirmDialogComponent>,
    @Inject(MAT_DIALOG_DATA) private data
  ) { }

  ngOnInit() {
    this.title=this.data.title;
    this.content=this.data.content;
  }

  onClick(result:boolean){
    this.dialogRef.close(result);
  }

}
