import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserLoginComponent } from '../../pages/user-login/user-login.component';


export const Login_ROUTES: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: UserLoginComponent }
];

@Component({ 
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})



export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
