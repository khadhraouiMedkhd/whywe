import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { ComponentsComponent } from './components/components.component';
import { ProfileComponent } from './examples/profile/profile.component';
import { SignupComponent } from './examples/signup/signup.component';
import { LandingComponent } from './examples/landing/landing.component';
import { NucleoiconsComponent } from './components/nucleoicons/nucleoicons.component';
import { RecipientFComponent } from './components/recipient-f/recipient-f.component';
import { SponsorfComponent } from './components/sponsorf/sponsorf.component';
import { LoginpageComponent } from './components/loginpage/loginpage.component';
import { AdminComponent } from './components/admin/admin.component';
import { SponsorcretefComponent } from './components/sponsorcretef/sponsorcretef.component';

const routes: Routes =[
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home',             component: ComponentsComponent },
    // { path: 'user-profile',     component: ProfileComponent },
    { path: 'signup',           component: SignupComponent },
    // { path: 'landing',          component: LandingComponent },
    { path: 'recipientf',       component: RecipientFComponent }, 
    { path: 'sponsorf',         component: SponsorfComponent },
    // { path: 'login',            component: LoginpageComponent },
    { path: 'admin',            component: AdminComponent },
    { path: 'sponsorcreateform',  component: SponsorcretefComponent },
    // { path: 'nucleoicons',      component: NucleoiconsComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CommonModule,
    RouterModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
      useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
