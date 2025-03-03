import { inject, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';


//Implementation of AUTH GURAD to make routes protected
export const GuardGuard : CanActivateFn =(route,state)=>{
  const router=inject(Router);
  const curretnUser = localStorage.getItem("currentuser");
  debugger
  if(curretnUser!=null)
    {
      return true ;
    }
  else {
    router.navigate(['']);
    return false;
  }
  
}
  
  
