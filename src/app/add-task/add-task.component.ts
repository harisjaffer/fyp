import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { responseClass, responseUser } from '../response/response';
import { AddTaskService } from './add-task.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {

  userTask:'';
  users:any='';
  taskName:any='';
  startDate:any='';
  endDate:any='';
  description:any='';

  constructor(private _service: AddTaskService,private datePipe: DatePipe, private __toaster: ToastrService) { }

  ngOnInit() {
    this._service.getByUser().subscribe((data) => {
      console.log(data.body);
      var _data: responseUser;
      _data = data.body["GetUsersResult"][0];
      this.users = _data.Users;
      console.log(this.users);
    })
  }

  createTask(){
    if(this.startDate == '' || this.endDate == '' || this.userTask == '' || this.description == '' || this.taskName == ''){
      this.__toaster.success('<span class="now-ui-icons ui-1_bell-53"></span>Field Should not be null', '', {
        timeOut: 150000,
        closeButton: true,
        enableHtml: true,
        toastClass: "alert alert-info alert-with-icon",
        positionClass: 'toast-' + 'bottom' + '-' + 'center'
      })
    }
    else{
      var _startDate = this.datePipe.transform(this.startDate,'yyyy-MM-dd');
      var _endDate = this.datePipe.transform(this.endDate,'yyyy-MM-dd');
      this._service.createTask(this.userTask,this.taskName,this.description,_startDate,_endDate).subscribe((data)=>{
        var _response : responseClass;
        _response = data.body["TaskAssignResult"];
        if(_response.Code == "01"){
          this.startDate = '';
          this.endDate = '';
          this.taskName = '';
          this.description = '';
          this.userTask = '';
          this.__toaster.success('<span class="now-ui-icons ui-1_bell-53"></span> '+ _response.Message, '', {
            timeOut: 150000,
            closeButton: true,
            enableHtml: true,
            toastClass: "alert alert-info alert-with-icon",
            positionClass: 'toast-' + 'bottom' + '-' + 'center'
          })
        }
        else{
          this.__toaster.success('<span class="now-ui-icons ui-1_bell-53"></span> '+ _response.Message, '', {
            timeOut: 150000,
            closeButton: true,
            enableHtml: true,
            toastClass: "alert alert-info alert-with-icon",
            positionClass: 'toast-' + 'bottom' + '-' + 'center'
          })
        }
      })
    }
  }

}
