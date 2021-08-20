import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthGuard} from "./core/gaurds";
import {CustomPreloadingStrategy} from "./custom-preloading-strategy.service";
import {RoutesEnum} from "./routes.enum";

const routes: Routes = [
  {
    path: '',
    redirectTo: RoutesEnum.posts,
    pathMatch: 'full'
  },
  {
    path: RoutesEnum.posts,
    loadChildren: ()=>import('./modules/post-list/post-list.module').then(m=>m.PostListModule)
  },
  {
    path: RoutesEnum.newPost,
    loadChildren: ()=>import('./modules/new-post/new-post.module').then(m=>m.NewPostModule),
    canActivate: [AuthGuard]
  },
  {
    path: '**', //wild card like 404
    redirectTo: RoutesEnum.posts,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
