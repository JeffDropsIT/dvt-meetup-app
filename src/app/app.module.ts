import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CategoriesComponent } from './categories/categories.component';
import { GroupsComponent } from './groups/groups.component';
import { CategoryComponent } from './category/category.component';
import { CategoriesService } from './services/categories/categories.service';
import { HttpClientModule } from "@angular/common/http";
import { GroupComponent } from './group/group.component'
import { GroupsService } from "./services/groups/groups.service";
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'
import { AppRoutingModule} from "./app-routing.module";
import { FilterComponent } from './filter/filter.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    GroupsComponent,
    CategoryComponent,
    GroupComponent,
    NavBarComponent,
    PageNotFoundComponent,
    FilterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule

  ],
  providers: [CategoriesService, GroupsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
