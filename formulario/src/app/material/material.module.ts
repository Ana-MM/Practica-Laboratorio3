import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatDatepickerModule,
    MatRadioModule,
    MatSelectModule
  ],
  exports: [
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatDatepickerModule,
    MatRadioModule,
    MatSelectModule
  ]
})
export class MaterialModule { }
