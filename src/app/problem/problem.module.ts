import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProblemRoutingModule } from './problem-routing.module';
import { ProblemIdComponent } from './pages/problem-id/problem-id.component';
import { CoreModule } from '../core/core.module';


@NgModule({
  declarations: [ProblemIdComponent],
  imports: [
    CommonModule,
    CoreModule,
    ProblemRoutingModule
  ]
})
export class ProblemModule { }
