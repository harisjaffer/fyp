import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { responseClass, responseLocation } from '../response/response';

@Injectable({
  providedIn: 'root'
})
export class UserLocationService {

  constructor(private _http: HttpClient) { }

  getByUser() {
    return this._http.get<responseClass>('/api/FarazSrv/Service1.svc/GetUsers', {
      observe: 'response'
    });
  }

  getUserLocation(userId) {
    return this._http.post<responseClass>('/api/FarazSrv/Service1.svc/GetLocationsById', {
      "UserId": userId
    }, {
      observe: 'response'
    })
  }
}
