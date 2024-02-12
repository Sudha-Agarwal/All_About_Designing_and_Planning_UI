import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BindingsComponent } from './bindings/bindings.component';
import { HomeComponent } from './home/home.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { ModelFormComponent } from './model-form/model-form.component';
import { PipesComponent } from './pipes/pipes.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ParentComponent } from './parent/parent.component';
import { StructuralDirectiveComponent } from './structural-directive/structural-directive.component';

const routes: Routes = [
  {path:'', redirectTo:'/binding', pathMatch:'full'},
  {path:'binding', component:BindingsComponent},
  {path:'home', component:HomeComponent},
  {path: 'products', component: ProductsListComponent},
  {path:'product-detail/:id',component:ProductDetailComponent},
  {path:'login-form',component:LoginFormComponent},
  {path:'model-form',component:ModelFormComponent},
  {path:'pipes',component:PipesComponent},
  {path:'parent',component:ParentComponent},
  {path:'structural-directive', component:StructuralDirectiveComponent},
  {path:'**', component:PageNotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
