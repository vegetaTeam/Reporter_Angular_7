import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from "./dashboard/login/login.component";
import {NotFoundComponent} from "./dashboard/not-found/not-found.component";

const routes: Routes = [
  {
    path: '', component: LoginComponent
  },
  {
    path: 'main',
    loadChildren: './dashboard/main/main.module#MainModule'
  },
  {
    path: 'not-found', component: NotFoundComponent
  },
  {
    path: '**', redirectTo: 'not-found'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
