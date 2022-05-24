import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './shared/guards/auth.guard';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./auth/auth.module').then(module=>module.AuthModule),
  },
  {
    canActivate:[AuthGuard],
    path: 'home/:id',
    component: HomeComponent
    
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
