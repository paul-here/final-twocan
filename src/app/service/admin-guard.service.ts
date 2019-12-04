import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot,RouterStateSnapshot,Router } from '@angular/router';
import {AuthenticationService} from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuardService implements CanActivate{

  constructor(private router: Router,
    private authService: AuthenticationService) { }


    canActivate(route:ActivatedRouteSnapshot, state: RouterStateSnapshot){
    if (this.authService.isAdminLoggedIn()){
      return true;
    }  
    else{
      this.router.navigate(['/login']);
      return false;
    }
  }
}
