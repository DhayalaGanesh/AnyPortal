import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ForgotPasswordComponent } from './ForgotPassword/forgotpassword.component';
import { HomeComponent } from './HomePage/homepage.component';
import { LoginComponent } from './Login/login.component';

const routes: Routes = [
  {
    path:"homepage",
    component: HomeComponent
  },
  {
    path:"forgotPassword",
    component: ForgotPasswordComponent
  },
  {
    path:"login",
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
