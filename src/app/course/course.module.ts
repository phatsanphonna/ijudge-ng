import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseRoutingModule } from './course-routing.module';
import { CourseHomeComponent } from './course-home/course-home.component';


@NgModule({
  declarations: [
    CourseHomeComponent
  ],
  imports: [
    CommonModule,
    CourseRoutingModule
  ],
  exports: [
    CourseRoutingModule
  ]
})
export class CourseModule { }
