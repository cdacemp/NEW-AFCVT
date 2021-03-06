import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { DashboardComponent } from './super-dashboard/dashboard.component'


const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "register", component: RegistrationComponent },
  { path: "dashboard", component: DashboardComponent },
  { path: '', component: LoginComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
