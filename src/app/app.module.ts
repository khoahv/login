import { AuthenService } from './Shared/Services/authen.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA ,ApplicationRef} from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {LayoutModule} from '././layout/layout/layout.module'
import {FormsModule} from '@angular/forms';
import { UserService } from './Shared/Services/user.service';
import { TokenService } from './Shared/Services/token.service';
import {CommonModule,APP_BASE_HREF} from '@angular/common';
import { HttpModule } from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { RouterModule } from '@angular/router';
import { AgmCoreModule } from '@agm/core';
import { NgxSpinnerModule } from 'ngx-spinner';



@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    LayoutModule,
    FormsModule,
    HttpModule,
    NgxSpinnerModule,
    // ToastModule.forRoot(),
    BrowserAnimationsModule,
    CommonModule,
    ToastrModule.forRoot(),
    RouterModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAFgM81Qz-SwfTzUsr4F51AgDj0HdN88CQ'
    })
  ],
  providers: [{provide: APP_BASE_HREF, useValue : '/' },UserService,TokenService, AuthenService],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]

})
export class AppModule { }
