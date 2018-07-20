import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RecipesComponent} from './recipes/recipes.component';
import { DetailsComponent} from './details/details.component';
import {BlogComponent} from './blog/blog.component';

const routes: Routes = [
  {
    path: '',
    component: RecipesComponent
  },
  {
    path: 'details/:id',
    component: DetailsComponent
  },
  {
    path: 'myRecipes',
    component: BlogComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
