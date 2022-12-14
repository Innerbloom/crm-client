import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './components/layouts/login/login.component';
import { NotFoundComponent } from './components/layouts/not-found/not-found.component';
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { RegComponent } from './components/layouts/reg/reg.component';
import {MainpageModule} from "./components/layouts/mainpage/mainpage.module";
import {AgGridModule} from "ag-grid-angular";
import {LogsComponent} from "./components/layouts/mainpage/components/logs/logs.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        NotFoundComponent,
        RegComponent,
        LogsComponent,
    ],
    imports: [
        MainpageModule,
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        NgbModule,
        ReactiveFormsModule,
        AgGridModule,
        BrowserAnimationsModule,
        MatButtonModule
    ],
    providers: [],
    exports: [
        LogsComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
