import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { Environment } from './app/core/enums/Environment';
import { enableProdMode } from '@angular/core';

if (
    environment.environment === Environment.PRODUCTION ||
    environment.environment === Environment.STAGING
) {
    enableProdMode();
}

platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .catch(err => console.error(err));
