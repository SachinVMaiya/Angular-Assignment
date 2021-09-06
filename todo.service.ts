import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private baseUrl = 'https://jsonplaceholder.typicode.com/';
  constructor(private http: HttpClient) { }

  getTodos(): Observable<any> {
    return this.http.get(`${this.baseUrl}todos`);
  }

}