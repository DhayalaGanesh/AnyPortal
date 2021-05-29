import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginService } from '../Services/login.services';
import { Router } from '@angular/router';
import { LoginResponse } from '../Models/loginresponse.model';
import { LoginModel } from '../Models/login.model';

@Component({
    selector: 'app-forgot',
    templateUrl: './forgotpassword.component.html',
    styleUrls: ['./forgotpassword.component.scss']
  })
  export class ForgotPasswordComponent{
      constructor(private _loginService: LoginService, private _router: Router){
          this.userName = "";
          this.responseModel = new LoginModel();
      }
      forgotForm=new FormGroup({
        Username: new FormControl(null, Validators.required)
    })
    responseModel: LoginModel;
      public userName: string
      public forgotPassword(){
        let forgotModel: LoginModel = {
            username: this.forgotForm.controls.Username.value,
            password: ""
        }
        this._loginService.ForgotPassword(forgotModel).subscribe(
            success=>{
                if(success)
                {
                    alert("Email is sent to the corresponding email address of the user");
                    this._router.navigate(['/login']);
                }
                else{
                    alert("Invalid UserName");
                }
            },
            error=>{
                alert("Error when fetching from API. Please try again")
            }
            
        )
      }
  }