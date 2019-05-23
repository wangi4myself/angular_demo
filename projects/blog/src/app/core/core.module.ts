import { NgModule,SkipSelf,Optional } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SliderbarComponent } from './sliderbar/sliderbar.component';
import { MatToolbarModule,MatIconModule,MatButtonModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { MatIconRegistry } from '@angular/material'
import { DomSanitizer } from '@angular/platform-browser'
import{ loadSvgResources} from '../utils/svg.utils'

@NgModule({
  declarations: [HeaderComponent, FooterComponent, SliderbarComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    HttpClientModule
  ],
  exports:[
    HeaderComponent, FooterComponent, SliderbarComponent
  ]
})
export class CoreModule { 
  constructor(@Optional() @SkipSelf() parent:CoreModule,
    ir:MatIconRegistry,ds:DomSanitizer
  ){
    if(!!parent){
      throw new Error('模块已经加载')
    }
    loadSvgResources(ir,ds);
  }
}
