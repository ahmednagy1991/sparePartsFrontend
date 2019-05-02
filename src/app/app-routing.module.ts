import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { PublicComponent,PUBLIC_ROUTES } from './layout/public/public.component';
import { LoginComponent ,Login_ROUTES} from './layout/login/login.component';

const routes: Routes = [
  { path: '', component: PublicComponent, data: { title: 'Public Views' }, children: PUBLIC_ROUTES },
  { path: '', component: LoginComponent, data: { title: 'Login Views' }, children: Login_ROUTES },
  { path: '**', redirectTo: 'login' },
  { path: '', component: HomePageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
