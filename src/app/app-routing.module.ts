import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'recepies', pathMatch: 'full' },
  { path: 'recepies',
  children: [
    {
      path: '',
      loadChildren: './recepies/recepies.module#RecepiesPageModule',
    },
    {
      path: ':recipeId',
     loadChildren: './recepies/recipe-detail/recipe-detail.module#RecipeDetailPageModule',
    }
  ]
}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
