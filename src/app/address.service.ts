import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AddressService {
  private apiUrl = 'http://localhost:5000/api/address';

  constructor(private http: HttpClient) {}

 //ฟังก์ชันสำหรับเพิ่มที่อยู่ใหม่
 addAddress(addressData: any, token: string): Observable<any> {
  const headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}` // ส่ง token ผ่าน Header
  });

  return this.http.post<any>(this.apiUrl, addressData, { headers }).pipe(
    catchError(error => {
      console.error('Failed to save address', error);
      return throwError(error);
    })
  );
}

//ฟังก์ชันสำหรับดึงข้อมูลที่อยู่
getAddress(token: string): Observable<any[]> {
  const headers = new HttpHeaders({
    'Authorization': `Bearer ${token}` // ส่ง token ผ่าน Header
  });

  return this.http.get<any[]>(this.apiUrl, { headers }).pipe(
    catchError(error => {
      console.error('Failed to fetch address', error);
      return throwError(error);
    })
  );
}

//ฟังก์ชันสำหรับลบที่อยู่
deleteAddress(id: string, token: string): Observable<any> {
  const headers = new HttpHeaders({
    'Authorization': `Bearer ${token}` // ส่ง token ผ่าน Header
  });

  return this.http.delete(`${this.apiUrl}/${id}`, { headers }).pipe(
    catchError(error => {
      console.error('Error delete address', error);
      return throwError(error);
    })
  );
}

//ฟังก์ชันสำหรับแก้ไขที่อยู่
updateAddress(id: string, addressData: any, token: string): Observable<any> {
  const headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}` // ส่ง token ผ่าน Header
  });

  return this.http.put(`${this.apiUrl}/${id}`, addressData, { headers }).pipe(
    catchError(error => {
      console.error('Failed to update address', error);
      return throwError(error);
    })
  );
}
}