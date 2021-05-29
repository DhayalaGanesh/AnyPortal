import { Injectable } from "@angular/core";
import { LoginResponse } from '../Models/loginresponse.model';
@Injectable()
export class LoggedInUser{
    private userDetails: LoginResponse;
    private isLoggedIn: boolean=false;
    constructor(){
        this.userDetails = new LoginResponse();
    }

    public GetIsLoggedIn(): boolean{
        if(localStorage.getItem("UserDetails")!=null){
            this.isLoggedIn=true;
            this.SetData(JSON.parse(localStorage.getItem("UserDetails") || ''));
            return this.isLoggedIn;
        }
        return this.isLoggedIn;
    }

    public SetData(_userDetails: LoginResponse){
        this.userDetails=_userDetails;
    }

    public  GetData(): LoginResponse{
        return this.userDetails;
    }
}