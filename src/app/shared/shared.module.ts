import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterLink } from '@angular/router';

import { ErrorsModule } from './errors/errors.module';
import { ButtonComponent } from './components/button/button.component';
import { SelectComponent } from './components/select/select.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { StoreModule } from '@ngrx/store';
import * as ThemeStore from './store/reducers/theme.reducer';
import { ThemeSwitchComponent } from './components/theme-switch/theme-switch.component';

@NgModule({
    declarations: [
        ButtonComponent,
        SelectComponent,
        NavbarComponent,
        ThemeSwitchComponent,
    ],
    imports: [
        CommonModule,
        RouterLink,
        FontAwesomeModule,
        ErrorsModule,
        StoreModule.forFeature(ThemeStore.featureKey, ThemeStore.themeReducer),
    ],
    exports: [
        ButtonComponent,
        SelectComponent,
        NavbarComponent,
        ThemeSwitchComponent,
    ],
})
export class SharedModule {}
