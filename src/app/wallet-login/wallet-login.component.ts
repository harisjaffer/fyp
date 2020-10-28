import { Component, OnInit } from '@angular/core';
import { WalletLoginService } from './wallet-login.service';
import { Router } from '@angular/router';
import { responseClass } from '../response/response';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'app-wallet-login',
    templateUrl: './wallet-login.component.html',
    styleUrls: ['./wallet-login.component.scss']
})
export class WalletLoginComponent implements OnInit{

    _error: string;

    constructor(private _service: WalletLoginService, private _router: Router, private toaster: ToastrService) { }

        ngOnInit(){
            var a = localStorage.getItem("AdminId");
            if(a == null || a == '' || a == undefined){
                this._router.navigate(['/']);
            }
            else{
                this._router.navigate(['/dashboard']);
            }
        }

    getLogin(email, password) {
        if (email == '' || password == '') {
            
        }
        else {
            this._error = "Loading";
            this._service.getUserLogin(email, password).subscribe((data) => {
                var dataBody: responseClass;
                dataBody = data.body["AdminLoginResult"];
                if (dataBody.Code == "01") {
                    console.log(dataBody.Admin);
                    localStorage.setItem("AdminId",dataBody.Admin["AdminId"]);
                    this._router.navigate(['/dashboard']);
                    this._error="";
                }
                else {
                    this._error = "";
                }
            },(error)=>{
                this._error = "";
                this.toaster.success('<span class="now-ui-icons ui-1_bell-53"></span> Internal Server Erro', '', {
                    timeOut: 150000,
                    closeButton: true,
                    enableHtml: true,
                    toastClass: "alert alert-info alert-with-icon",
                    positionClass: 'toast-' + 'bottom' + '-' + 'center'
                  })
            })
        }
    }

}