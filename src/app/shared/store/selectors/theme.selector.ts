import { AppStateInterface } from '../../types/appState.interface';
import { createSelector } from '@ngrx/store';

export const selectFeature = (state: AppStateInterface) => state.theme;

export const selectFeatureActiveTheme = createSelector(
    selectFeature,
    state => state.activeTheme
);

export const selectFeatureIcon = createSelector(
    selectFeature,
    state => state.icon
);
