import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { ErrorsModule } from './errors/errors.module';
import { NavbarComponent } from './layout/components/navbar/navbar.component';
import { ButtonComponent } from './layout/components/button/button.component';

@NgModule({
    declarations: [NavbarComponent, ButtonComponent],
    imports: [CommonModule, FontAwesomeModule, ErrorsModule],
    exports: [NavbarComponent, ButtonComponent],
})
export class SharedModule {}
