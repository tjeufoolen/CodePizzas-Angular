import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ErrorsModule } from "./errors/errors.module";
import { NavbarComponent } from './layout/components/navbar/navbar.component';

@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    ErrorsModule
  ],
  exports: [
    NavbarComponent
  ]
})
export class SharedModule { }
