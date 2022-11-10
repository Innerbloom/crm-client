import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainpageDashboardComponent} from "./components/mainpage.dashboard/mainpage.dashboard.component";
import {HomeComponent} from "./components/home/home.component";
import {AuthGuard} from "../../../guards/auth.guard";
import {LogsComponent} from "./components/logs/logs.component";



const routes: Routes = [
  {path: '', component: MainpageDashboardComponent, canActivate: [AuthGuard]},
  {path: 'logs', component: LogsComponent, canActivate: [AuthGuard]},
  {path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainpageRoutingModule { }
