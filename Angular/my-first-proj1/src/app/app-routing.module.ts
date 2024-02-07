import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BindingsComponent } from './bindings/bindings.component';
import { HomeComponent } from './home/home.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

const routes: Routes = [
  {path:'binding', component:BindingsComponent},
  {path:'home', component:HomeComponent},
  {path: 'products', component: ProductsListComponent},
  {path:'product-detail/:id',component:ProductDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
