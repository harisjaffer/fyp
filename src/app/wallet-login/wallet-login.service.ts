import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { responseClass } from '../response/response';

@Injectable({
    providedIn: 'root'
})
export class WalletLoginService {

    constructor(private _http: HttpClient) { }

    getUserLogin(_email: string, _password: string) {
        return this._http.post<responseClass>('/api/FarazSrv/Service1.svc/AdminLogin', ({
            "Email": _email,
            "Password": _password
        }),
            { observe: 'response' });
    }

}