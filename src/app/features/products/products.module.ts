import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OverviewComponent } from './pages/overview/overview.component';
import { DetailsComponent } from './pages/details/details.component';
import { CardComponent } from './components/card/card.component';
import { ProductsRoutingModule } from './products.routing.module';

@NgModule({
    declarations: [OverviewComponent, DetailsComponent, CardComponent],
    imports: [CommonModule, ProductsRoutingModule],
})
export class ProductsModule {}
