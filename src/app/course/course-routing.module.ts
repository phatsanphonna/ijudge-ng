import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseHomeComponent } from './pages/course-home/course-home.component';
import { authGuard } from '../core/guards/auth.guard';

export const routes: Routes = [
  {
    path: 'courses',
    component: CourseHomeComponent,
    canActivate: [authGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CourseRoutingModule {}
