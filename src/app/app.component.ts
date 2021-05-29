import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  constructor(private _router: Router){
  //   this.isUserAuthenticated = false;
  //   _router.events.subscribe((e: RouterEvent) => {
  //    this.isUserAuthenticated = localStorage.getItem('isUserAuthenticated')!=null;
    
  //  });
  }
  
  ngOnInit(): void {
    
    this.isUserAuthenticated = localStorage.getItem('isUserAuthenticated')!=null && localStorage.getItem('isUserAuthenticated')!='null';
    if(this.isUserAuthenticated){
      this._router.navigate(['/homepage']);
    }
    else{
      this._router.navigate(['/login']);
    }
  }

  title = 'Any Portal';
  public isUserAuthenticated: boolean = false;

}
