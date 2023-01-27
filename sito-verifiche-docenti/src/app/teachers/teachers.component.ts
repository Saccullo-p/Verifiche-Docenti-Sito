import { Observable } from "rxjs";
import { ExamService } from "../exam.service";
import { Docente } from "../docente";
import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';
import {Location} from '@angular/common'

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.css']
})

export class TeachersComponent {
  data: Docente[] = undefined!;
  obsRooms: Observable<Docente[]> | undefined

  constructor(private userService: ExamService, private router: Router,private location: Location ) { }

  ngOnInit() {
    this.reloadData();
  }

  // Il metodo "reloadData" utilizza un servizio chiamato "userService" per recuperare una lista di elementi
  reloadData() {
    // Il metodo "getDocentiList" restituisce un Observable che rappresenta la lista di docenti
    this.obsRooms = this.userService.getDocentiList()
    // Il metodo "subscribe" viene utilizzato per iscriversi all'Observable
    // Viene specificata una funzione chiamata "fati" per essere eseguita ogni volta che i dati vengono estratti dall'Observable
    this.obsRooms.subscribe(this.fati)
  }

  // La funzione "fati" assegna i dati dal vettore "Docente" alla proprietà "data"
  fati = (data: Docente[]) => {
    this.data = data;
    console.log(this.data);
  }

  back() : void
  {
    this.router.navigate(['/dashboard']);
  }

}
