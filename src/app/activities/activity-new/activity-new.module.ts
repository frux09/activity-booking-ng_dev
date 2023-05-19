import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActivityNewRoutingModule } from './activity-new-routing.module';
import { ActivityNewComponent } from './activity-new.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ActivityNewComponent
  ],
  imports: [
    CommonModule,
    ActivityNewRoutingModule,
    ReactiveFormsModule
  ]
})
export class ActivityNewModule { }
