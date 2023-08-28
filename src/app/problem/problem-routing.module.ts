import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProblemIdComponent } from './pages/problem-id/problem-id.component';
import { authGuard } from '../core/guards/auth.guard';

const routes: Routes = [
  {
    path: 'problems',
    canActivate: [authGuard],
    children: [
      {
        path: ':id',
        component: ProblemIdComponent,
        canActivate: [authGuard],
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProblemRoutingModule { }
