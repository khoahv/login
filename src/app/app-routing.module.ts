import { PagenotfoundComponent } from './layout/pagenotfound/pagenotfound.component';
import { AuthenService } from './Shared/Services/authen.service';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './layout/login/login.component';
import { DoashboardComponent } from './layout/doashboard/doashboard.component';
import { LayoutComponent } from './layout/layout/layout.component';
import { ProfileComponent } from './layout/profile/profile.component';
import { DoashboardsComponent } from './layout/doashboards/doashboards.component';
const routes: Routes = [
  {path: 'login', component: LoginComponent},
 {path: '', redirectTo: 'login', pathMatch: 'full'},
 {  canActivate: [AuthenService],
   path: 'layout', component: LayoutComponent, children: [
     {path: 'profile', component: ProfileComponent},
     {path: 'doashboard', component: DoashboardsComponent}
   ]},
   {path: "**", component: PagenotfoundComponent}

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
