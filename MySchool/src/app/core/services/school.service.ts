import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, throwError } from 'rxjs';
import { School } from '../models/school.modul';
import { BackendAspService } from '../../environments/ASP.NET/backend-asp.service';

@Injectable({
  providedIn: 'root',
})
export class SchoolService {
  private ApI = inject(BackendAspService);
  private http = inject(HttpClient);

  constructor() {}

  getAllSchools(): Observable<School[]> {
    return this.http.get<School[]>(`${this.ApI.baseUrl}/School`).pipe(
      res => {
        console.log('this get school', res)
        return res;
      },
      catchError((error) => {
        return throwError(() => new Error(error.message));
      })
    )
    }
      
  

  addSchool(school: School): Observable<School> {
    return this.http.post<School>(`${this.ApI.baseUrl}/School`, school).pipe(
      catchError((error) => {
        return throwError(() => new Error(error.message));
      })
    );
  }

  updateSchool(id: number, school: School): Observable<any> {
    return this.http.put(`${this.ApI.baseUrl}/School/${id}`, school).pipe(
      map(res=>res),
      catchError((error) => {
        return throwError(() => new Error(error.message));
      })
    );
  }

  deleteSchool(id: number): Observable<void> {
    return this.http.delete<void>(`${this.ApI.baseUrl}/School/${id}`).pipe(
      catchError((error) => {
        return throwError(() => new Error(error.message));
      })
    );
  }
}
