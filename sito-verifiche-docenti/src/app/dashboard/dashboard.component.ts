import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  constructor(private router: Router) {}

  logout()  {
    this.router.navigate(['/login']);
  }
  doce()  {
    this.router.navigate(['/teachers']);
  }
  veri()  {
    this.router.navigate(['/verifica']);
  }

}