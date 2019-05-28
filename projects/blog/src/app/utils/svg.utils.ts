import { MatIconRegistry } from '@angular/material'
import { DomSanitizer } from '@angular/platform-browser'

export const loadSvgResources=(ir:MatIconRegistry,ds:DomSanitizer)=>{
    ir.addSvgIcon('gifts',ds.bypassSecurityTrustResourceUrl('assets/images/hudong.svg'));
    ir.addSvgIcon('move',ds.bypassSecurityTrustResourceUrl('assets/images/icons/move.svg'));
    ir.addSvgIcon('add',ds.bypassSecurityTrustResourceUrl('assets/images/icons/add.svg'));
    ir.addSvgIcon('delete',ds.bypassSecurityTrustResourceUrl('assets/images/icons/delete.svg'));
    ir.addSvgIconSetInNamespace('avatars',ds.bypassSecurityTrustResourceUrl('assets/images/avatar/avatars.svg'))
    ir.addSvgIconSetInNamespace('unassigned',ds.bypassSecurityTrustResourceUrl('assets/images/avatar/unassigned.svg'))
}