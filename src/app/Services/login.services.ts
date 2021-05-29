import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { LoginModel } from '../Models/login.model';


@Injectable()
export class LoginService{
    constructor(private http: HttpClient){}
    public LoginVerification(loginModel : LoginModel){
        return this.http.post(environment.apiUrl + '/auth', loginModel);
    }

    public ForgotPassword(loginModel : LoginModel){
        loginModel.password="noValues1";
        return this.http.post(environment.apiUrl + '/auth/ResetPasswordRequest', loginModel)
    }
}