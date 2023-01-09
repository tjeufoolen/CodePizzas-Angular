import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsModule } from './features/products/products.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, AppRoutingModule, SharedModule, ProductsModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
