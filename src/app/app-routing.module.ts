import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router"
import { CategoriesComponent } from './categories/categories.component';
import { GroupsComponent } from './groups/groups.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [
    { path: '', redirectTo: '/groups', pathMatch: 'full' },
    {path:"settings", component: CategoriesComponent},
    {path:"groups", component: GroupsComponent},
    {path:"groups/:id", component: GroupsComponent},
    {path:"**", component: PageNotFoundComponent}
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]

})
export class AppRoutingModule { }
export const routingComponent = [
  CategoriesComponent,
  GroupsComponent,
  PageNotFoundComponent
]