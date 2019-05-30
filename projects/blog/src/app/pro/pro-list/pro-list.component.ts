import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { NewProComponent } from '../new-pro/new-pro.component'
import { InviteComponent } from '../invite/invite.component';
import { ConfirmDialogComponent } from '../../shared/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-pro-list',
  templateUrl: './pro-list.component.html',
  styleUrls: ['./pro-list.component.scss']
})
export class ProListComponent implements OnInit {
  projects=[
    {
      "name":'11',
      "desc":'desc',
      "coverImg":'assets/images/covers/0.jpg'
    },
    {
      "name":'11',
      "desc":'desc',
      "coverImg":'assets/images/covers/1.jpg'
    },
  ]
  constructor(private dialog:MatDialog) { 

  }

  ngOnInit() {
  }

  openNewDialog(){
    const dialogRef= this.dialog.open(NewProComponent,{data:{title:'新建项目'}})
    // dialogRef.afterClosed().subscribe(result=>console.log('==>',result))
  }

  lanchInviteDialog(){
    const dialogRef= this.dialog.open(InviteComponent)
  }

  lanchUpdateDialog(){
    const dialogRef= this.dialog.open(NewProComponent,{data:{title:'编辑项目'}})

  }

  lanchConfirmDialog(){
    const dialogRef= this.dialog.open(ConfirmDialogComponent,{data:{title:'删除项目',content:'您确认执行该操作吗?'}})
    dialogRef.afterClosed().subscribe(result=>console.log('==>',result))
  }

}
