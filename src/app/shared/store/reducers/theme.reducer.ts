import { createReducer, on } from '@ngrx/store';
import { ThemeStoreInterface } from '../../types/themeStore.interface';
import { Theme } from '../../enums/Theme';
import * as ThemeActions from '../actions/theme.action';
import { faLightbulb, faMoon } from '@fortawesome/free-solid-svg-icons';

export const featureKey = 'theme';

export const initialState: ThemeStoreInterface = {
    activeTheme: Theme.LIGHT,
    icon: faLightbulb,
};

export const themeReducer = createReducer(
    initialState,
    on(ThemeActions.toggleTheme, state => {
        if (state.activeTheme === Theme.LIGHT) {
            return { activeTheme: Theme.DARK, icon: faMoon };
        } else {
            return initialState;
        }
    })
);
