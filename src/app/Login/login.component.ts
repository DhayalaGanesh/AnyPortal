import { Component, Output } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginResponse } from '../Models/loginresponse.model';
import { LoginModel } from '../Models/login.model';
import { LoginService } from '../Services/login.services';
import { EventEmitter } from 'protractor';
import { LoggedInUser } from '../Services/loggedin-user.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent {
    constructor(private _loginService: LoginService, private _router: Router, private _loggedInUser: LoggedInUser) {
        this.responseModel = new LoginResponse();
        this.isUserAuthenticated = false;
    }
    public isUserAuthenticated: boolean;
    ngOnInit(): void {
        this.isUserAuthenticated = localStorage.getItem('isUserAuthenticated') != null;
        if (this.isUserAuthenticated) {
            this._router.navigate(['/homepage']);
        }
    }
    responseModel: LoginResponse;

    // loginForm = new FormGroup({
    //     Username: new FormControl(null, Validators.required),
    //     Password: new FormControl(null, [Validators.required, Validators.pattern('^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9]{8,})$')])
    // })
    loginForm = new FormGroup({
        Username: new FormControl(null, Validators.required),
        Password: new FormControl(null, Validators.required)
    })

    public LoginFormSubmit() {
        if (this.loginForm.valid) {
            console.log('Submitted');
            let loginModel: LoginModel = {
                username: this.loginForm.controls.Username.value,
                password: this.loginForm.controls.Password.value
            }
            this._loginService.LoginVerification(loginModel).subscribe(
                success => {
                    this.responseModel = success as LoginResponse;
                    this._loggedInUser.SetData(this.responseModel);
                    if (this.responseModel.success) {
                        console.log(this.responseModel);
                        localStorage.setItem('isUserAuthenticated', "true");
                        localStorage.setItem('UserDetails',JSON.stringify(this.responseModel));
                        this.isUserAuthenticated = true;
                        this._router.navigate(['/homepage']);
                    }
                    else {
                        console.log('error after gettingback from api');
                    }
                },
                error => {
                    alert('Error when fetching calling the API')
                }
            );
        }
        else {
            console.log('error');
        }

    }

    public forgotPassword(){
        this._router.navigate(['/forgotPassword']);
    }
}