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

  reloadData() {
    this.obsRooms = this.userService.getDocentiList()
    this.obsRooms.subscribe(this.fati)
  }
  fati = (data: Docente[]) => {
    this.data = data;
    console.log(this.data);
  }

  back() : void
  {
    this.router.navigate(['/dashboard']);
  }

}
