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
import {FooterComponent} from "./components/layouts/mainpage/components/footer/footer.component";
import {HeaderComponent} from "./components/layouts/mainpage/components/header/header.component";
import {LogsComponent} from "./components/layouts/mainpage/components/logs/logs.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {
    DialogPartnersComponent
} from "./components/layouts/mainpage/components/home/dialog-partners/dialog-partners.component";

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
        BrowserAnimationsModule
    ],
    providers: [],
    exports: [
        LogsComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
