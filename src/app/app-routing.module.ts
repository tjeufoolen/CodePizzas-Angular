import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "products"
  },
  {
    path: "products",
    loadChildren: () => import("./features/products/products.module").then(m => m.ProductsModule)
  },
  {
    path: "**",
    pathMatch: "full",
    redirectTo: "/404"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
