import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { ErrorsModule } from './errors/errors.module';
import { NavbarComponent } from './layout/components/navbar/navbar.component';
import { ButtonComponent } from './layout/components/button/button.component';
import { SelectComponent } from './layout/components/select/select.component';
import { RouterLink } from '@angular/router';

@NgModule({
    declarations: [NavbarComponent, ButtonComponent, SelectComponent],
    imports: [CommonModule, FontAwesomeModule, ErrorsModule, RouterLink],
    exports: [NavbarComponent, ButtonComponent, SelectComponent],
})
export class SharedModule {}
