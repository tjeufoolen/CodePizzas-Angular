import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsModule } from './products/products.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [],
    imports: [CommonModule, SharedModule, ProductsModule],
    exports: [],
})
export class FeaturesModule {}
