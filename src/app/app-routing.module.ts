import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./components/layouts/login/login.component";
import {NotFoundComponent} from "./components/layouts/not-found/not-found.component";
import {RegComponent} from "./components/layouts/reg/reg.component";
import {MainpageComponent} from "./components/layouts/mainpage/mainpage.component";
import {AuthGuard} from "./guards/auth.guard";

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'reg', component: RegComponent},
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'mainpage', component: MainpageComponent,
    loadChildren: () => import('./components/layouts/mainpage/mainpage.module')
        .then((m) => m.MainpageModule)
  , canActivate: [AuthGuard]},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
