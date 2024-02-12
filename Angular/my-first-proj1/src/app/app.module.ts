import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BindingsComponent } from './bindings/bindings.component';
import { HomeComponent } from './home/home.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginFormComponent } from './login-form/login-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModelFormComponent } from './model-form/model-form.component';
import { PipesComponent } from './pipes/pipes.component';
import { FilterPipe } from './filter.pipe';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { StructuralDirectiveComponent } from './structural-directive/structural-directive.component';

@NgModule({
  declarations: [
    AppComponent,
    BindingsComponent,
    HomeComponent,
    ProductsListComponent,
    ProductDetailComponent,
    LoginFormComponent,
    ModelFormComponent,
    PipesComponent,
    FilterPipe,
    PageNotFoundComponent,
    ParentComponent,
    ChildComponent,
    StructuralDirectiveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
