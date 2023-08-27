import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzCardModule } from 'ng-zorro-antd/card'
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzSpaceModule } from 'ng-zorro-antd/space';

const nzModule = [
  NzIconModule,
  NzInputModule,
  NzButtonModule,
  NzCardModule,
  NzTypographyModule,
  NzFormModule,
  NzSpaceModule
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    nzModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    nzModule
  ]
})
export class CoreModule { }
