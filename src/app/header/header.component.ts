import { Component } from '@angular/core';
import { AuthComponent } from '../auth/auth.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor( private router: Router) { }

  logOut() {
    localStorage.removeItem('currentuser'); 
    this.router.navigateByUrl('/login');
 }
}
