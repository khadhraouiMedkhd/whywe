import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { NouisliderModule } from 'ng2-nouislider';
import { JwBootstrapSwitchNg2Module } from 'jw-bootstrap-switch-ng2';
import { RouterModule } from '@angular/router';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { BasicelementsComponent } from './basicelements/basicelements.component';
import { NavigationComponent } from './navigation/navigation.component';
import { TypographyComponent } from './typography/typography.component';
import { NucleoiconsComponent } from './nucleoicons/nucleoicons.component';
import { ComponentsComponent } from './components.component';
import { NotificationComponent } from './notification/notification.component';
import { NgbdModalComponent } from './modal/modal.component';
import { NgbdModalContent } from './modal/modal.component';
import { RecipientFComponent } from './recipient-f/recipient-f.component';
import { SponsorfComponent } from './sponsorf/sponsorf.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { AdminComponent } from './admin/admin.component';
import { SponsorcretefComponent } from './sponsorcretef/sponsorcretef.component';
import { BrowserModule } from '@angular/platform-browser';
import { CounterResultComponent } from './counter-result/counter-result.component';
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgbModule,
        NgbNavModule,
        BrowserModule,
        NouisliderModule,
        RouterModule,
        JwBootstrapSwitchNg2Module
    ],
    declarations: [
        ComponentsComponent,
        BasicelementsComponent,
        NavigationComponent,
        TypographyComponent,
        NucleoiconsComponent,
        NotificationComponent,
        NgbdModalComponent,
        NgbdModalContent,
        RecipientFComponent,
        SponsorfComponent,
        LoginpageComponent,
        AdminComponent,
        SponsorcretefComponent,
        CounterResultComponent
    ],
    entryComponents: [NgbdModalContent],
    exports:[ ComponentsComponent ],
    bootstrap: [ComponentsComponent]
})
export class ComponentsModule { }
