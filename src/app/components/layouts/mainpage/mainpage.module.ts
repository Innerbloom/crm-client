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
import {MatDialogModule} from '@angular/material/dialog';
import { AgGreedPartnersComponent } from './components/home/ag-greed-partners/ag-greed-partners.component';
import { DialogPartnersComponent } from './components/home/dialog-partners/dialog-partners.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {MatButtonModule} from "@angular/material/button";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
    declarations: [
        FooterComponent,
        HeaderComponent,
        HomeComponent,
        MainpageComponent,
        SidebarComponent,
        EchartsComponent,
        AggreedComponent,
        AgGreedPartnersComponent,
        DialogPartnersComponent,
    ],
    exports: [
        SidebarComponent,
        FooterComponent,
        EchartsComponent,
        AggreedComponent,
        HeaderComponent,
    ],
    imports: [
        CommonModule,
        MainpageRoutingModule,
        NgxEchartsModule,
        AgGridModule,
        MatDialogModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatButtonModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    entryComponents: [DialogPartnersComponent],
})
export class MainpageModule { }
