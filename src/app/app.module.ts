import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import {MatInputModule} from '@angular/material/input';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import {MatButtonModule} from '@angular/material/button';
import { AppComponent } from './app.component';
import {MatCardModule} from '@angular/material/card';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { WalletLoginComponent } from './wallet-login/wallet-login.component';
import { AddUserComponent } from './add-user/add-user.component';
import { UserLocationComponent } from './user-location/user-location.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { UserTaskComponent } from './user-task/user-task.component';
import {MatSelectModule} from '@angular/material/select';
import { AgmCoreModule } from '@agm/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { DatePipe } from '@angular/common';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    NgbModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule, 
    MatSelectModule,
    MatNativeDateModule,
    MatDatepickerModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDd5N1ZG3PeXD0LcNe3Jdx10czNjtrIzoY'
    }),
    ToastrModule.forRoot()
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    WalletLoginComponent,
    AddUserComponent,
    UserLocationComponent,
    AddTaskComponent,
    UserTaskComponent
  ],
  providers: [MatDatepickerModule,DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
