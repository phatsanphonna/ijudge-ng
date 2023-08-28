import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CourseRoutingModule } from './course-routing.module';
import { CourseHomeComponent } from './pages/course-home/course-home.component';

@NgModule({
  declarations: [CourseHomeComponent],
  imports: [CommonModule, CourseRoutingModule],
  exports: [CourseRoutingModule],
})
export class CourseModule {}
