import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Docente } from '../docente';
import { flaskLink } from '../link';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  name: string = '';
  surname: string= '';
  email: string= '';
  password: string= '';
  errorMessage: string= '';
  successMessage: string= '';
  obsReg: Observable<Docente[]> = undefined!;
  data: any = undefined!;


  constructor(private http: HttpClient, public router: Router) { }

  private baseUrlPrin = flaskLink._API;

  ngOnInit(): void {
  }

  register() {
    this.http.post( this.baseUrlPrin + 'register',{ name: this.name, surname: this.surname, email: this.email, password: this.password }).subscribe(
      data => {
        console.log(data);
        if (data.hasOwnProperty('error')) {
          this.errorMessage = "Error: Invalid Informations!!";
        } else {
          this.successMessage = "You have successfully Registerd!";
          localStorage.setItem('user', JSON.stringify(data));
          this.router.navigate(['/login']);
        }
      },
      error => {
        console.log(error);
        this.errorMessage = "Error: Invalid Informations!!";
      }
    );
  }
}
