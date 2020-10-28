import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { responseLocation, responseLocationParam, responseUser } from '../response/response';
import { UserLocationService } from './user-location.service';

@Component({
  selector: 'app-user-location',
  templateUrl: './user-location.component.html',
  styleUrls: ['./user-location.component.scss']
})
export class UserLocationComponent implements OnInit {

  users: any = '';
  lat = 24.8710724;
  lng = 67.0641639;
  user: any = '';
  zoom: number = 15;

  constructor(private _service: UserLocationService, private _toaster: ToastrService) { }

  selectionChange(event) {
    this._service.getUserLocation(event).subscribe((data) => {
      var _data: responseLocation;
      _data = data.body["GetLocationsByIdResult"][0];
      console.log(_data.Locparam);
      if (Object.keys(_data.Locparam).length > 0) {
        var getData: responseLocationParam;
        getData = _data.Locparam[0];
        this.lat = getData.Latitude;
        this.lng = getData.Longitute;
        this.user = getData.UserName;
      }
      else {
        this._toaster.success('<span class="now-ui-icons ui-1_bell-53"></span> No Location Found', '', {
          timeOut: 150000,
          closeButton: true,
          enableHtml: true,
          toastClass: "alert alert-info alert-with-icon",
          positionClass: 'toast-' + 'bottom' + '-' + 'center'
        })
      }
    }, (error) => {
      this._toaster.success('<span class="now-ui-icons ui-1_bell-53"></span>Internal Server Error', '', {
        timeOut: 150000,
        closeButton: true,
        enableHtml: true,
        toastClass: "alert alert-info alert-with-icon",
        positionClass: 'toast-' + 'bottom' + '-' + 'center'
      })
    })
  }

  ngOnInit() {
    this._service.getByUser().subscribe((data) => {
      console.log(data.body);
      var _data: responseUser;
      _data = data.body["GetUsersResult"][0];
      this.users = _data.Users;
    })

  }
}