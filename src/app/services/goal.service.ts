import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';



@Injectable({
  providedIn: 'root'
})

export class GoalService {
  

 
  private baseUrl = 'http://localhost:8081/api/goals';
  constructor(private http: HttpClient) { }

  

  getById(goalId: any) {
    return this.http.get(`${this.baseUrl}/${goalId}`);
  }

  getAll(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  get(id): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createGoal(data): Observable<any> {
    return this.http.post(`${this.baseUrl}`, data);
  }

  update(id,data): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, data);
  }

  delete(id): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.delete(`${this.baseUrl}`);
  }

 

}
