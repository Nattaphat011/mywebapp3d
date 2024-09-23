import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../environments/environment';
import { HttpHeaders } from '@angular/common/http';

interface User {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

interface Credentials {
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private registerUrl = `${environment.apiUrl}/register`;
  private loginUrl = `${environment.apiUrl}/login`;
  private usersUrl = `${environment.apiUrl}/users`;

  constructor(private http: HttpClient) {}

  register(user: User): Observable<any> {
    return this.http.post<any>(this.registerUrl, user).pipe(
      catchError(error => {
        console.error('Registration failed', error);
        return throwError(error);
      })
    );
  }

  login(credentials: Credentials): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem('token')}` // หรือวิธีการเก็บ token ของคุณ
    });
  
    return this.http.post<any>(this.loginUrl, credentials, { headers }).pipe(
      catchError(error => {
        console.error('Login failed', error);
        return throwError(error);
      })
    );
  }

  getUsers(): Observable<any> {
    return this.http.get<any>(this.usersUrl).pipe(
      catchError(error => {
        console.error('Failed to fetch users', error);
        return throwError(error);
      })
    );
  }
}
