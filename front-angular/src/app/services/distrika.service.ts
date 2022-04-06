import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DistrikaService {

  constructor(private http: HttpClient) { }

  getAllDistrika() {
    return this.http.get(`${environment.apiUrl}/distrika`)
      .pipe(map(
        (response: any) => {
          return response;
        }
      ));
  }

  getDistrikaById(id: number) {
    return this.http.get(`${environment.apiUrl}/distrika/` + id)
      .pipe(map(
        (response: any) => {
          return response;
        }
      ));
  }

  getDistrikaByName(name: string) {
    return this.http.get(`${environment.apiUrl}/distrika/name/` + name)
      .pipe(map(
        (response: any) => {
          return response;
        }
      ));
  }

  addDistrika(payload: any) {
    return this.http.post(`${environment.apiUrl}/distrika`, payload)
      .pipe(map(
        (response: any) => {
          return response;
        }
      ));
  }

  editDistrika(id: number, payload: any) {
    return this.http.put(`${environment.apiUrl}/distrika/edit/` + id, payload)
      .pipe(map(
        (response: any) => {
          return response;
        }
      ));
  }

  deleteDistrika(id: number) {
    return this.http.delete(`${environment.apiUrl}/distrika/delete/` + id)
      .pipe(map(
        (response: any) => {
          return response;
        }
      ));
  }

}
