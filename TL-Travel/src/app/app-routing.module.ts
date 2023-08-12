import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authenticationGuard } from './guards/authentication.guard';
import { LogInComponent } from './log-in/log-in.component';

const routes: Routes = [
  {
    path: 'login',
    component: LogInComponent
  },
  {
    path: '', 
    redirectTo: 'login', 
    pathMatch: 'full',
  },
  {
    path: 'hotel',
    canActivate: [authenticationGuard],
    loadChildren: () =>
    import('./components/hotel/hotel.module').then((m) => m.HotelModule),
  },
  {
    path: '**', 
    redirectTo: 'login', 
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
