import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private apiUrl = 'http://localhost:8087';

  constructor(private http: HttpClient) { }

  registerAdmin(data: any): Observable<any> {
    const url = `${this.apiUrl}/saveAdmin`;
    return this.http.post(url, data);
  }
}
