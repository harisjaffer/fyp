import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { responseClass } from '../response/response';

@Injectable({
  providedIn: 'root'
})
export class AddUserService {

  constructor(private _http: HttpClient) { }


  addUser(firstName, lastName, phoneNumber, email){
    return this._http.post<responseClass>('/api/FarazSrv/Service1.svc/ParentSignUp',{
      "FirstName":firstName,
      "LastName":lastName,
      "ContactNumber":phoneNumber,
      "email":email
    },{
      observe:'response'
    })
  }
}
