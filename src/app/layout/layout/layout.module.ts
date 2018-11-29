import { PagenotfoundComponent } from './../pagenotfound/pagenotfound.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { LoginComponent } from './../login/login.component';
import { DoashboardComponent } from './../doashboard/doashboard.component';
import { LayoutComponent } from './../layout/layout.component';
import {FormsModule} from '@angular/forms';
import { ProfileComponent } from './../profile/profile.component';
import { RouterModule } from '@angular/router';
import { DoashboardsComponent } from '../doashboards/doashboards.component';
import { AgmCoreModule } from '@agm/core';
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
    declarations: [
        LoginComponent,
        DoashboardComponent,
        LayoutComponent,
        PagenotfoundComponent,
        ProfileComponent,
        DoashboardsComponent,

    ],
    exports: [
        DoashboardComponent,
        LoginComponent,
        LayoutComponent,
        ProfileComponent,
        LayoutComponent,
        DoashboardsComponent,


    ],
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule,
        AgmCoreModule,
        NgxSpinnerModule 
    ],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ]

})
export class LayoutModule { }