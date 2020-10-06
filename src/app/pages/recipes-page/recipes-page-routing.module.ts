import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipesPageComponent } from './recipes-page.component';

const routes: Routes = [ 
  {
    path: '',
    component: RecipesPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecipesPageRoutingModule { }
