import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AllComponent } from './all/all.component';
import { TshirtYudComponent } from './tshirt-yud/tshirt-yud.component';
import { TshirtPoloComponent } from './tshirt-polo/tshirt-polo.component';
import { HanscreenComponent } from './hanscreen/hanscreen.component';
import { HanpukComponent } from './hanpuk/hanpuk.component';
import { Login2Component } from './login2/login2.component';
import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [
  {path: '', redirectTo: 'header', pathMatch: 'full' },
  {path: 'header', component:HeaderComponent },
  {path: 'contact', component:ContactComponent },

  {path: '', redirectTo: 'footer', pathMatch: 'full' },
  {path: 'footer', component:FooterComponent },
  {path: 'contact', component:ContactComponent },

  {path: '', redirectTo: 'header', pathMatch: 'full' },
  {path: 'header', component:HeaderComponent },
  {path: 'about', component:AboutComponent },

  {path: '', redirectTo: 'header', pathMatch: 'full' },
  {path: 'header', component:HeaderComponent },
  {path: 'login', component:LoginComponent },
  
  {path: '', redirectTo: 'about', pathMatch: 'full' },
  {path: 'about', component:AboutComponent },
  {path: 'login', component:Login2Component },

  {path: '', redirectTo: 'login2', pathMatch: 'full' },
  {path: 'login', component:LoginComponent },
  {path: 'register', component:RegisterComponent },

  {path: '', redirectTo: 'all', pathMatch: 'full' },
  {path: 'all', component:AllComponent },
  {path: 'header', component:HeaderComponent },

  {path: '', redirectTo: 'tshirt_yud', pathMatch: 'full' },
  {path: 'tshirt_yud', component:TshirtYudComponent },
  {path: 'header', component:HeaderComponent },

  {path: '', redirectTo: 'tshirt_polo', pathMatch: 'full' },
  {path: 'tshirt_polo', component:TshirtPoloComponent },
  {path: 'header', component:HeaderComponent },

  {path: '', redirectTo: 'hanscreen', pathMatch: 'full' },
  {path: 'hanscreen', component:HanscreenComponent },
  {path: 'header', component:HeaderComponent },

  {path: '', redirectTo: 'hanpuk', pathMatch: 'full' },
  {path: 'hanpuk', component:HanpukComponent },
  {path: 'header', component:HeaderComponent },

  {path: '', redirectTo: 'about', pathMatch: 'full' },
  {path: 'about', component:AboutComponent },
  {path: 'login', component:LoginComponent },

  { path: 'login', component: LoginComponent },
  { path: 'header', component: HeaderComponent }, // เส้นทางไปยังหน้าหลัก
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // เปลี่ยนเส้นทางเริ่มต้น
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
