import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'http://localhost:8087';

  constructor(private http: HttpClient) { }

  registerStudent(data: any): Observable<any> {
    const url = `${this.apiUrl}/saveStudent`;
    return this.http.post(url, data);
  }
}
