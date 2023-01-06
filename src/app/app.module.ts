import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsListComponent } from './features/products/components/products-list/products-list.component';
import { ListComponent } from './features/products/components/list/list.component';
import { DetailsComponent } from './features/products/components/details/details.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsListComponent,
    ListComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
