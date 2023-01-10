import { Component } from '@angular/core';
import {
    faEarth,
    faLightbulb,
    faMoon,
    faShoppingCart,
    faUserAlt,
} from '@fortawesome/free-solid-svg-icons';
import { Theme } from '../../../../core/enums/Theme';
import { IconDefinition } from '@fortawesome/free-brands-svg-icons';
import { Router } from '@angular/router';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
    languageIcon: IconDefinition = faEarth;
    shoppingCartIcon: IconDefinition = faShoppingCart;
    accountIcon: IconDefinition = faUserAlt;

    constructor(private router: Router) {
        this.router = router;
    }

    // TODO: Move account variables and mutations to state
    isLoggedIn = false;
    // END: Move account variables and mutations to state

    navigate(url: string): void {
        this.router.navigateByUrl(url);
    }

    // TODO: Move theme variables and mutations to state
    theme: Theme = Theme.LIGHT;

    toggleTheme(): void {
        this.theme = this.theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;
    }

    get themeIcon(): IconDefinition {
        if (this.theme === Theme.LIGHT) {
            return faLightbulb;
        } else {
            return faMoon;
        }
    }
    // END: Move theme variables and mutations to state

    changeLanguage(value: string) {
        console.log('language change!!!');
        console.log({ value });
        // TODO: Implement language change functionality
    }
}
