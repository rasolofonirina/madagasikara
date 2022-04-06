import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FaritraService {

  constructor(private http: HttpClient) { }

  getAllFaritra() {
    return this.http.get(`${environment.apiUrl}/faritra`)
      .pipe(map(
        (response: any) => {
          return response;
        }
      ));
  }

  getFaritraById(id: number) {
    return this.http.get(`${environment.apiUrl}/faritra/` + id)
      .pipe(map(
        (response: any) => {
          return response;
        }
      ));
  }

  getFaritraByName(name: string) {
    return this.http.get(`${environment.apiUrl}/faritra/name/` + name)
      .pipe(map(
        (response: any) => {
          return response;
        }
      ));
  }

  addFaritra(payload: any) {
    return this.http.post(`${environment.apiUrl}/faritra`, payload)
      .pipe(map(
        (response: any) => {
          return response;
        }
      ));
  }

  editFaritra(id: number, payload: any) {
    return this.http.put(`${environment.apiUrl}/faritra/edit/` + id, payload)
      .pipe(map(
        (response: any) => {
          return response;
        }
      ));
  }

  deleteFaritra(id: number) {
    return this.http.delete(`${environment.apiUrl}/faritra/delete/` + id)
      .pipe(map(
        (response: any) => {
          return response;
        }
      ));
  }

}
