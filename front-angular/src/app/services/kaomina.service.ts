import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class KaominaService {

  constructor(private http: HttpClient) { }

  getAllKaomina() {
    return this.http.get(`${environment.apiUrl}/kaomina`)
      .pipe(map(
        (response: any) => {
          return response;
        }
      ));
  }

  getKaominaById(id: number) {
    return this.http.get(`${environment.apiUrl}/kaomina/` + id)
      .pipe(map(
        (response: any) => {
          return response;
        }
      ));
  }

  getKaominaByName(name: string) {
    return this.http.get(`${environment.apiUrl}/kaomina/name/` + name)
      .pipe(map(
        (response: any) => {
          return response;
        }
      ));
  }

  addKaomina(payload: any) {
    return this.http.post(`${environment.apiUrl}/kaomina`, payload)
      .pipe(map(
        (response: any) => {
          return response;
        }
      ));
  }

  editKaomina(id: number, payload: any) {
    return this.http.put(`${environment.apiUrl}/kaomina/edit/` + id, payload)
      .pipe(map(
        (response: any) => {
          return response;
        }
      ));
  }

  deleteKaomina(id: number) {
    return this.http.delete(`${environment.apiUrl}/kaomina/delete/` + id)
      .pipe(map(
        (response: any) => {
          return response;
        }
      ));
  }

}
