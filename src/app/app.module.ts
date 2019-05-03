import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { PublicComponent } from './layout/public/public.component';
import { LoginComponent } from './layout/login/login.component';
import { UserLoginComponent } from './pages/user-login/user-login.component';
import { AddCategoryComponent } from './pages/category/add-category/add-category.component';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Api } from './providers/api/api'
@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    PublicComponent,
    UserLoginComponent,
    LoginComponent,
    AddCategoryComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
    

  ],
  providers: [Api],
  bootstrap: [AppComponent]
})
export class AppModule { }
