import { Theme } from '../enums/Theme';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

export interface ThemeStoreInterface {
    activeTheme: Theme;
    icon: IconProp;
}
