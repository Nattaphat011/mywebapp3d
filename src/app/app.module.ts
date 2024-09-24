import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AuthGuard } from './auth.guard';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { AllComponent } from './all/all.component';
import { TshirtYudComponent } from './tshirt-yud/tshirt-yud.component';
import { TshirtPoloComponent } from './tshirt-polo/tshirt-polo.component';
import { HanscreenComponent } from './hanscreen/hanscreen.component';
import { HanpukComponent } from './hanpuk/hanpuk.component';
import { DesignComponent } from './design/design.component';
import { Login2Component } from './login2/login2.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms'; 
import { HttpClientModule } from '@angular/common/http';
import { AdminComponent } from './admin/admin.component';
import { AccoustComponent } from './accoust/accoust.component';
import { AddressComponent } from './address/address.component';
import { Address2Component } from './address2/address2.component';
@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    ContactComponent,
    AboutComponent,
    AllComponent,
    TshirtYudComponent,
    TshirtPoloComponent,
    HanscreenComponent,
    HanpukComponent,
    DesignComponent,
    Login2Component,
    DashboardComponent,
    AdminComponent,
    AccoustComponent,
    AddressComponent,
    Address2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    HttpClientModule,
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
  ],
  providers: [
    provideAnimationsAsync(),
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
