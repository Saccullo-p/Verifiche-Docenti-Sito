import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  t: any;

  constructor(private router: Router) {}
  

  logout()  {
    // Clear session data
    this.t = localStorage.removeItem('verifca');
    this.router.navigate(['/login']);
  }
  tec()  {
    this.router.navigate(['/teachers']);
  }
  sicn()  {
    this.router.navigate(['/verifica']);
  }

}