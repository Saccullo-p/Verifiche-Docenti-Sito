import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { flaskLink } from './link';

@Injectable({
  providedIn: 'root'
})

export class ExamService {

  private baseUrlPrin = flaskLink._API;
  private baseUrl = this.baseUrlPrin + 'verifiche';

  constructor(private http: HttpClient) { }

  getVerificaList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  getDocentiList(): Observable<any> {
    return this.http.get(`${this.baseUrlPrin}` + 'docenti');
  }
}