import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [],
  imports: [
    MatFormFieldModule,
  ],
  exports: [
    MatFormFieldModule,
    ReactiveFormsModule,
  ]
})
export class FormsModule { }
