import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CategoriesComponent } from './categories/categories.component';
import { GroupsComponent } from './groups/groups.component';
import { CategoryComponent } from './category/category.component';
import { CategoriesService } from './services/categories/categories.service';
import { HttpClientModule } from "@angular/common/http";
import { GroupComponent } from './group/group.component'
import { GroupsService } from "./services/groups/groups.service"
@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    GroupsComponent,
    CategoryComponent,
    GroupComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule


  ],
  providers: [CategoriesService, GroupsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
