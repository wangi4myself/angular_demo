import { MatIconRegistry } from '@angular/material'
import { DomSanitizer } from '@angular/platform-browser'

export const loadSvgResources=(ir:MatIconRegistry,ds:DomSanitizer)=>{
    ir.addSvgIcon('gifts',ds.bypassSecurityTrustResourceUrl('assets/images/hudong.svg'));
    ir.addSvgIconSetInNamespace('avatars',ds.bypassSecurityTrustResourceUrl('assets/images/avatar/avatars.svg'))
}