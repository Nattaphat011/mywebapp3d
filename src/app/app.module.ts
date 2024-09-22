import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatIconModule } from '@angular/material/icon';
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
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
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
    AdminComponent
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
  ],
  providers: [
    provideAnimationsAsync(),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
