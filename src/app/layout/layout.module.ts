import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { CopyrightComponent } from './copyright/copyright.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    CopyrightComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [FooterComponent, HeaderComponent]
})
export class LayoutModule { }
