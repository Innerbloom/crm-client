import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainpageRoutingModule } from './mainpage-routing.module';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { MainpageDashboardComponent } from './components/mainpage.dashboard/mainpage.dashboard.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { EchartsComponent } from './components/logs/echarts/echarts.component';
import {NgxEchartsModule} from "ngx-echarts";


@NgModule({
    declarations: [
        FooterComponent,
        HeaderComponent,
        HomeComponent,
        MainpageDashboardComponent,
        SidebarComponent,
        EchartsComponent
    ],
    exports: [
        HeaderComponent,
        SidebarComponent,
        FooterComponent,
        EchartsComponent
    ],
    imports: [
        CommonModule,
        MainpageRoutingModule,
        NgxEchartsModule
    ]
})
export class MainpageModule { }
