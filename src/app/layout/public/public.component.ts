import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from '../../pages/home-page/home-page.component';

export const PUBLIC_ROUTES: Routes = [
  { path: 'home', component: HomePageComponent }
];


@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.css']
})


export class PublicComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
