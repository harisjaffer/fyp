import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
  
  constructor(private _router: Router){}

  ngOnInit(){
    var _user = localStorage.getItem("AdminId");
    console.log(_user);
    // if(_user == "" || _user == null){
    //   this._router.navigate(["/"]);
    // }
  }
}