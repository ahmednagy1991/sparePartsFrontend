import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { PublicComponent } from './layout/public/public.component';
import { LoginComponent } from './layout/login/login.component';
import { UserLoginComponent } from './pages/user-login/user-login.component';
@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    PublicComponent,
    UserLoginComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
