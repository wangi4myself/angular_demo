import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { NewProComponent } from '../new-pro/new-pro.component'
import { InviteComponent } from '../invite/invite.component';

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
    const dialogRef= this.dialog.open(NewProComponent,{data:{dark:true}})
    dialogRef.afterClosed().subscribe(result=>console.log('==>',result))
  }

  lanchInviteDialog(){
    const dialogRef= this.dialog.open(InviteComponent)
  }

}
