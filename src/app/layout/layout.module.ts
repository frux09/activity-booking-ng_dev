import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { CopyrightComponent } from './copyright/copyright.component';
import { HeaderComponent } from './header/header.component';



@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    CopyrightComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [FooterComponent, HeaderComponent]
})
export class LayoutModule { }
