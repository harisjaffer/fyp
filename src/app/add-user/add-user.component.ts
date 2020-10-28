import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  contactNumber:string;
  firstName:string;
  lastName:string;
  email: string

  constructor() { }

  ngOnInit() {
  }

  createUser(){
    console.log(this.firstName, this.contactNumber, this.lastName, this.email);
  }

}
