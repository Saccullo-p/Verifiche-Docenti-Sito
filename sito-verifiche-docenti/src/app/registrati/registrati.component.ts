import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Docente } from '../docente';
import { flaskLink } from '../link';

@Component({
  selector: 'app-registrati',
  templateUrl: './registrati.component.html',
  styleUrls: ['./registrati.component.css']
})

export class RegistratiComponent implements OnInit {
  name: string = '';
  surname: string= '';
  email: string= '';
  password: string= '';
  errorMessage: string= '';
  successMessage: string= '';
  obsReg: Observable<Docente[]> = undefined!;
  data: any = undefined!;

  constructor(private http: HttpClient, public router: Router) { }

  // Viene assegnato alla proprietà "baseUrlPrin" il valore della variabile "_API"
  private baseUrlPrin = flaskLink._API;

  ngOnInit(): void {
  }

  changeCase() {
    if(this.name) {
      this.name = this.name.charAt(0).toUpperCase() + this.name.slice(1);
    }
    if(this.surname){
      this.surname = this.surname.charAt(0).toUpperCase() + this.surname.slice(1);
    }
  }

  register() {
    // Viene inviata una richiesta POST contenente i dati di registrazione all'API
    // Quando la richiesta viene completata con successo, la funzione "data" viene chiamata
    this.http.post( this.baseUrlPrin + 'register',{ name: this.name.charAt(0).toUpperCase() + this.name.slice(1), surname: this.surname.charAt(0).toUpperCase() + this.surname.slice(1), email: this.email, password: this.password }).subscribe(
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
          this.successMessage = "Registrazione effettuata con successo!";
          localStorage.setItem('user', JSON.stringify(data));
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
    );
  }
}
