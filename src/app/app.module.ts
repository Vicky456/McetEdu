import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ForgotComponent } from './pass/forgot/forgot.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { HomeStudentComponent } from './home/home-student/home-student.component';
import { SignoutComponent } from './auth/signout/signout.component';
import { HeaderComponent } from './support/header/header.component';
import { FooderComponent } from './support/fooder/fooder.component';
import { NavbarComponent } from './support/navbar/navbar.component';
import { ThemeComponent } from './support/theme/theme.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    ForgotComponent,
    HomeStudentComponent,
    SignoutComponent,
    HeaderComponent,
    FooderComponent,
    NavbarComponent,
    ThemeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
