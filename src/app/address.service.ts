import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AddressService {
  [x: string]: any;

  private addressesUrl = `${environment.apiUrl}/addresses`;
  constructor(private http: HttpClient) {}

  getAddress(userId: number): Observable<any[]> {
  return this.http.get<any[]>(`${this.addressesUrl}?userId=${userId}`).pipe(
    catchError(error => {
      console.error('Failed to fetch addresses', error);
      return throwError(error);
    })
  );
}

  deleteAddress(addressId: number): Observable<any> {
    return this.http.delete<any>(`${this.addressesUrl}/${addressId}`).pipe(
      catchError(error => {
        console.error('Failed to delete address', error);
        return throwError(error);
      })
    );
  }

  // ฟังก์ชันสำหรับอัปเดตที่อยู่
  updateAddress(id: number, address: any): Observable<any> {
    return this.http.put<any>(`${this.addressesUrl}/${id}`, address).pipe(
      catchError(error => {
        console.error('Failed to update address', error);
        return throwError(error);
      })
    );
  }

  // ฟังก์ชันสำหรับเพิ่มที่อยู่
  addAddress(address: any): Observable<any> {
    return this.http.post<any>(this.addressesUrl, address).pipe(
      catchError(error => {
        console.error('Failed to add address', error);
        return throwError(error);
      })
    );
  }
}
