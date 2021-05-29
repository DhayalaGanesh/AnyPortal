import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoggedInUser } from '../Services/loggedin-user.service';
import { LoginResponse } from '../Models/loginresponse.model';

@Component({
  selector: 'app-home',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(private _router: Router, private _loggedInUser: LoggedInUser) {
    this.loggedInUserDetails = new LoginResponse();
  }
  ngOnInit(): void {
    this.loggedInUserDetails=this._loggedInUser.GetData();
  }
  public loggedInUserDetails: LoginResponse;


  public logout() {
    localStorage.removeItem('isUserAuthenticated');
    localStorage.removeItem('UserDetails');
    this._loggedInUser.SetData(new LoginResponse());
    this._router.navigate(['/login'])
  }

}