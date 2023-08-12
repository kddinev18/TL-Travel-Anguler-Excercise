import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

export const authenticationGuard: CanActivateFn = (route, state) => {
  let authService = inject(AuthenticationService);
  let router = inject(Router);
  console.log('11111111111111111111111111111111111111111111111111111111');
  if(authService.isAuthenticated())
  {
    return true;
  }
  console.log('211111111111111111111111111111111111111111111111111111111');
  	
  router.navigate(['login']);
  return false;
};
