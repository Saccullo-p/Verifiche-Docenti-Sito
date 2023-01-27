import { Observable } from "rxjs";
import { ExamService } from "../exam.service";
import { Exam } from "../exam";
import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';
import {Location} from '@angular/common'

@Component({
  selector: 'app-verifiche',
  templateUrl: './verifiche.component.html',
  styleUrls: ['./verifiche.component.css']
})
export class VerificheComponent {
// Viene creato un vettore "data" di tipo "Exam"
data: Exam[] = undefined!;
// Viene creato l'Observable "obsRooms" di oggetti "Exam"
obsRooms: Observable<Exam[]> | undefined

constructor(private userService: ExamService, private router: Router,private location: Location ) { }

ngOnInit() {
  this.reloadData();
}

reloadData() {
  // All'interno del metodo "reloadData", viene assegnato il risultato del metodo "userService.getVerificaList()"
  this.obsRooms = this.userService.getVerificaList()
  // Il metodo "subscribe" prende come parametro una funzione che verrà eseguita quando i dati dell'Observable sono disponibili
  this.obsRooms.subscribe(this.fati)
}

// La funzione "fati" prende il parametro "data" di tipo "Exam"
fati = (data: Exam[]) => {
  // I dati passati vengono assegnati alla proprietà "data"
  this.data = data;
}

back() : void
{
  this.router.navigate(['/home']);
}
}
