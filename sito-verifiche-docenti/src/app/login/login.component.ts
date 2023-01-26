import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { flaskLink } from '../link';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  email: string = '';
  password: string = '';
  errorMessage: string = '';
  successMessage: string = '';
  obsLog: Observable<object> | undefined
  data: any = undefined!;

  
  private baseUrlPrin = flaskLink._API;

  constructor(private http: HttpClient, public router: Router) { }



  ngOnInit() {

  }

  login() {
    const data = { email: this.email, password: this.password };
    console.log("0");
    this.http.post(this.baseUrlPrin +'login', data).subscribe(
      data => {
        console.log(data);
        if (data.hasOwnProperty('error')) {
          this.errorMessage = "Error: Invalid Informations!!";
        } else {
          this.successMessage = "You have successfully Registerd!";
          localStorage.setItem('verifica', JSON.stringify(data));
          this.router.navigate(['/dashboard']);
        }
      },
      error => {
        console.log(error);
        this.errorMessage = "Error: Invalid Informations!!";
  })
  }

}

