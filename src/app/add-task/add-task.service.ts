import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { responseClass } from '../response/response';

@Injectable({
  providedIn: 'root'
})
export class AddTaskService {

  constructor(private _http:HttpClient) { }

  getByUser() {
    return this._http.get<responseClass>('/api/FarazSrv/Service1.svc/GetUsers', {
      observe: 'response'
    });
  }

  createTask(userId, taskname,description,  startDate, endDate){
    return this._http.post('/api//FarazSrv/Service1.svc/TaskAssign',{
        "UserId":userId,
        "TaskName":taskname,
        "startDate":startDate,
        "EndDate":endDate,
        "Description":description,
        "Status":"Active"
    },{
      observe: 'response'
    })
  }
}
