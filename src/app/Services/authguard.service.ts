import { Injectable } from '@angular/core';
import { LoggedInUser } from './loggedin-user.service';

@Injectable()
export class AuthGuardService {

  constructor(public _loggedinUser:LoggedInUser) { }
  
  canActivate():boolean
  {
    if(!this._loggedinUser.GetIsLoggedIn())
    {
      return false;
    }
    return true;
  }

}