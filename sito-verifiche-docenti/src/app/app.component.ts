import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router: Router) {}
  
  logout() {
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
  }

  redirect(){
    this.router.navigate(['/login']);
}
}