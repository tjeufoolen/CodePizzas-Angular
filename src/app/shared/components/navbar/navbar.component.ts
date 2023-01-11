import { Component } from '@angular/core';
import {
    faBars,
    faEarth,
    faShoppingCart,
    faUserAlt,
} from '@fortawesome/free-solid-svg-icons';
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
    mobileMenuIcon: IconDefinition = faBars;

    constructor(private router: Router) {
        this.router = router;
    }

    // TODO: Move account variables and mutations to state
    isLoggedIn = false;
    // END: Move account variables and mutations to state

    navigate(url: string): void {
        this.router.navigateByUrl(url);
    }

    changeLanguage(value: string) {
        console.log('language change!!!');
        console.log({ value });
        // TODO: Implement language change functionality
    }
}
