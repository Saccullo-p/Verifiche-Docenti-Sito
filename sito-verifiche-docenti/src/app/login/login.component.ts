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

  // Viene assegnato alla proprietà "baseUrlPrin" il valore della variabile "_API"
  private baseUrlPrin = flaskLink._API;

  constructor(private http: HttpClient, public router: Router) { }

  ngOnInit() {

  }

  login() {
    const data = { email: this.email, password: this.password };
    // Viene inviata una richiesta POST contenente i dati di registrazione all'API
    // Quando la richiesta viene completata con successo, la funzione "data" viene chiamata
    this.http.post(this.baseUrlPrin +'login', data).subscribe(
      data => {
        console.log(data);
        // Il metodo "hasOwnProperty" serve per verificare se l'oggetto di risposta ha una proprietà "error"
        // Se ha una proprietà "error", viene assegnato un messaggio di errore alla proprietà "errorMessage"
        if (data.hasOwnProperty('error')) {
          this.errorMessage = "Qualcosa è andato storto!";
          setTimeout(() => {
            this.errorMessage = '';
          }, 3000);
        } else {
          // Altrimenti viene assegnato un messaggio di successo alla proprietà "successMessage"
          this.successMessage = "Accesso effettuato correttamente!";
          localStorage.setItem('verifica', JSON.stringify(data));
          // Il metodo "navigate" serve per reindirizzare ad un'altra pagina
          this.router.navigate(['/home']);
        }
      },
      
      error => {
        console.log(error);
        this.errorMessage = "Qualcosa è andato storto!";
        setTimeout(() => {
          this.errorMessage = '';
        }, 3000);
      }
    )
  }

}

