import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FaritanyService {

  constructor(private http: HttpClient) { }

  getAllFaritany() {
    return this.http.get(`${environment.apiUrl}/faritany`)
      .pipe(map(
        (response: any) => {
          return response;
        }
      ));
  }

  getFaritanyById(id: number) {
    return this.http.get(`${environment.apiUrl}/faritany/` + id)
      .pipe(map(
        (response: any) => {
          return response;
        }
      ));
  }

  getFaritanyByName(name: string) {
    return this.http.get(`${environment.apiUrl}/faritany/name/` + name)
      .pipe(map(
        (response: any) => {
          return response;
        }
      ));
  }

  addFaritany(payload: any) {
    return this.http.post(`${environment.apiUrl}/faritany`, payload)
      .pipe(map(
        (response: any) => {
          return response;
        }
      ));
  }

  editFaritany(id: number, payload: any) {
    return this.http.put(`${environment.apiUrl}/faritany/edit/` + id, payload)
      .pipe(map(
        (response: any) => {
          return response;
        }
      ));
  }

  deleteFaritany(id: number) {
    return this.http.delete(`${environment.apiUrl}/faritany/delete/` + id)
      .pipe(map(
        (response: any) => {
          return response;
        }
      ));
  }

}
