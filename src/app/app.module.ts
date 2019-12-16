import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/shared_component/header/header.component';
import { FooterComponent } from './shared/shared_component/footer/footer.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { DashboardComponent } from './super-dashboard/dashboard.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { StationDashboardComponent } from './station-dashboard/station-dashboard.component';
import { AdminSidebarComponent } from './admin-dashboard/admin-sidebar/admin-sidebar.component';
import { AdminNavbarComponent } from './admin-dashboard/admin-navbar/admin-navbar.component';
import { AdminFooterComponent } from './admin-dashboard/admin-footer/admin-footer.component';
import { SuperSidebarComponent } from './super-dashboard/super-sidebar/super-sidebar.component';
import { SuperFooterComponent } from './super-dashboard/super-footer/super-footer.component';
import { StationSidebarComponent } from './station-dashboard/station-sidebar/station-sidebar.component';
import { StationFooterComponent } from './station-dashboard/station-footer/station-footer.component';
import { SuperToggleComponent } from './super-dashboard/super-toggle/super-toggle.component';
import { SuperNavbarComponent } from './super-dashboard/super-navbar/super-navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    RegistrationComponent,
    DashboardComponent,
    AdminDashboardComponent,
    StationDashboardComponent,
    AdminSidebarComponent,
    AdminNavbarComponent,
    AdminFooterComponent,
    SuperSidebarComponent,
    SuperFooterComponent,
    StationSidebarComponent,
    StationFooterComponent,
    SuperToggleComponent,
    SuperNavbarComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
