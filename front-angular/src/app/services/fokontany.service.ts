import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FokontanyService {

  constructor(private http: HttpClient) { }

  getAllFokontany() {
    return this.http.get(`${environment.apiUrl}/fokontany`)
      .pipe(map(
        (response: any) => {
          return response;
        }
      ));
  }

  getFokontanyById(id: number) {
    return this.http.get(`${environment.apiUrl}/fokontany/` + id)
      .pipe(map(
        (response: any) => {
          return response;
        }
      ));
  }

  getFokontanyByName(name: string) {
    return this.http.get(`${environment.apiUrl}/fokontany/name/` + name)
      .pipe(map(
        (response: any) => {
          return response;
        }
      ));
  }

  addFokontany(payload: any) {
    return this.http.post(`${environment.apiUrl}/fokontany`, payload)
      .pipe(map(
        (response: any) => {
          return response;
        }
      ));
  }

  editFokontany(id: number, payload: any) {
    return this.http.put(`${environment.apiUrl}/fokontany/edit/` + id, payload)
      .pipe(map(
        (response: any) => {
          return response;
        }
      ));
  }

  deleteFokontany(id: number) {
    return this.http.delete(`${environment.apiUrl}/fokontany/delete/` + id)
      .pipe(map(
        (response: any) => {
          return response;
        }
      ));
  }

}
