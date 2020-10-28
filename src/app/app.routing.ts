import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { WalletLoginComponent } from './wallet-login/wallet-login.component';
import { AddUserComponent } from './add-user/add-user.component';
import { UserLocationComponent } from './user-location/user-location.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { UserTaskComponent } from './user-task/user-task.component';

const routes: Routes = [
  {
    path: "",
    component: WalletLoginComponent,
    pathMatch: 'full'
  },
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
      },
      {
        path: 'add_user',
        component: AddUserComponent
      },
      
      {
        path: 'user_location',
        component: UserLocationComponent
      },
      {
        path: 'add_task',
        component: AddTaskComponent
      },
      {
        path: 'user_task',
        component: UserTaskComponent
      },
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
