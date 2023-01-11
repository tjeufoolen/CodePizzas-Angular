import { createAction } from '@ngrx/store';

const TOGGLE_THEME = '[Theme] Toggle theme';
export const toggleTheme = createAction(TOGGLE_THEME);
