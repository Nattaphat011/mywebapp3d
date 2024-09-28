import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';

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
import { AccoustComponent } from './accoust/accoust.component';
import { AdminComponent } from './admin/admin.component';
import { DesignComponent } from './design/design.component';
import { AddressComponent } from './address/address.component';
import { Address2Component } from './address2/address2.component';
import { Accoust2Component } from './accoust2/accoust2.component';


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

  {path: '', redirectTo: 'accoust', pathMatch: 'full' },
  {path: 'accoust', component:AccoustComponent },
  {path: 'header', component:HeaderComponent },

  {path: '', redirectTo: 'tshirt-yud', pathMatch: 'full' },
  {path: 'tshirt-yud', component:TshirtYudComponent },
  {path: 'header', component:HeaderComponent },

  {path: '', redirectTo: 'tshirt-polo', pathMatch: 'full' },
  {path: 'tshirt-polo', component:TshirtPoloComponent },
  {path: 'header', component:HeaderComponent },

  {path: '', redirectTo: 'header', pathMatch: 'full' },
  {path: 'header', component:HeaderComponent },
  {path: 'design', component:DesignComponent },

  {path: '', redirectTo: 'accoust', pathMatch: 'full' },
  {path: 'accoust', component:AccoustComponent },
  {path: 'address', component:AddressComponent },

  {path: '', redirectTo: 'address2', pathMatch: 'full' },
  {path: 'address2', component:Address2Component },

  {path: '', redirectTo: 'about', pathMatch: 'full' },
  {path: 'about', component:AboutComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'account', component: AccoustComponent }, // เส้นทางไปยังหน้าหลัก
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // เปลี่ยนเส้นทางเริ่มต้น

  { path: 'login', component: LoginComponent, canActivate: [AuthGuard] },
  { path: 'account', component: AccoustComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },

  { path: 'register', component: RegisterComponent },
  { path: 'contact', component: ContactComponent },
  {path: '', redirectTo: 'contact', pathMatch: 'full' },
  
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },

  { path: 'accoust2', component: Accoust2Component },
  { path: 'accoust', component: AccoustComponent },
  {path: '', redirectTo: 'accoust', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
