import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainpageRoutingModule } from './mainpage-routing.module';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { EchartsComponent } from './components/logs/echarts/echarts.component';
import {NgxEchartsModule} from "ngx-echarts";
import {AgGridModule} from "ag-grid-angular";
import {AggreedComponent} from './components/logs/aggreed/aggreed.component';
import {MainpageComponent} from "./mainpage.component";


@NgModule({
    declarations: [
        FooterComponent,
        HeaderComponent,
        HomeComponent,
        MainpageComponent,
        SidebarComponent,
        EchartsComponent,
        AggreedComponent,
    ],
    exports: [
        HeaderComponent,
        SidebarComponent,
        FooterComponent,
        EchartsComponent,
        AggreedComponent,
    ],
    imports: [
        CommonModule,
        MainpageRoutingModule,
        NgxEchartsModule,
        AgGridModule,
    ]
})
export class MainpageModule { }
