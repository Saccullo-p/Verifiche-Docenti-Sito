import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {

  constructor(private router: Router) {}

  logout()  {
    this.router.navigate(['/login']);
  }
  doce()  {
    this.router.navigate(['/docenti']);
  }
  veri()  {
    this.router.navigate(['/verifica']);
  }

}
