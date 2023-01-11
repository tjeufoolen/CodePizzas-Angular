import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import {
    selectFeatureActiveTheme,
    selectFeatureIcon,
} from '../../store/selectors/theme.selector';
import { Observable } from 'rxjs';
import { Theme } from '../../enums/Theme';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { AppStateInterface } from '../../types/appState.interface';
import * as ThemeActions from '../../store/actions/theme.action';

@Component({
    selector: 'app-theme-switch',
    templateUrl: './theme-switch.component.html',
    styleUrls: ['./theme-switch.component.scss'],
})
export class ThemeSwitchComponent {
    theme$: Observable<Theme>;
    icon$: Observable<IconProp>;

    constructor(private store: Store<AppStateInterface>) {
        this.theme$ = this.store.pipe(select(selectFeatureActiveTheme));
        this.icon$ = this.store.pipe(select(selectFeatureIcon));
    }

    toggleTheme(): void {
        this.store.dispatch(ThemeActions.toggleTheme());
    }
}
