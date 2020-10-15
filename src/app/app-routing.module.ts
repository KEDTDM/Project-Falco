import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SettingComponent } from './setting/setting.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthguardGuard } from './authguard.guard';
import { ViweComponent } from './viwe/viwe.component';

const routes: Routes = [
  { path: 'Home', component: HomeComponent},
  { path: 'login', component:  LoginComponent},
  { path: 'Register', component: RegisterComponent},
  { path: 'dashboard', component: DashboardComponent,canActivate: [AuthguardGuard] },
  { path: 'Setting', component: SettingComponent,canActivate: [AuthguardGuard]},
  { path: 'Viwe', component: ViweComponent,canActivate: [AuthguardGuard]},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
