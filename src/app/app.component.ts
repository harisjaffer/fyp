import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BnNgIdleService } from 'bn-ng-idle'; // import it to your component

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

}

export class SessionExpired {

  constructor(private bnIdle: BnNgIdleService, private _router: Router) { }

  public _sessionExpired() {
    this.bnIdle.startWatching(5000).subscribe((res) => {
    
      if (res) {
        var pagePath: any;
        pagePath = window.location.href;
        var domain: any;
        domain = window.location.host;
        domain = 'http://' + domain + '/';
        if (pagePath != domain) {
          localStorage.setItem('icon', '');
          localStorage.setItem('title', '');
          localStorage.setItem('authToken', '');
          localStorage.setItem('userName', '');
          localStorage.setItem('url', '');
          localStorage.setItem('count', '');
          localStorage.setItem('roleName', '');
          localStorage.setItem('userId', '');
          localStorage.setItem('password', '');
          localStorage.setItem('sessionTime', 'Session Expired!');
          this._router.navigate(['/']);
          window.location.reload();
        }
      }
      return;
    })
  }

}