import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CategoriesComponent } from './categories/categories.component';
import { GroupsComponent } from './groups/groups.component';
import { CategoryComponent } from './category/category.component';
import { CategoriesService } from './services/categories/categories.service';
import { HttpClientModule } from "@angular/common/http"
@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    GroupsComponent,
    CategoryComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule


  ],
  providers: [CategoriesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
