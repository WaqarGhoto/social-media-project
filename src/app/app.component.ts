import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { APIserviceService } from './apiservice.service';
import { AuthService } from './auth/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})
export class AppComponent {
  title = 'facebookDemo';
  isAuthenticated:boolean=false;
  routeChangeSubs:Subscription;
  user : any ;

  constructor(private router : Router ,private authService:AuthService ,private apiService:APIserviceService){
     this.routeChangeSubs = this.router.events.pipe(filter(event=>event instanceof NavigationEnd)).subscribe(val=>{
       if(val instanceof NavigationEnd){
          this.checkUserAuthentication();
       }
     })
  }

  checkUserAuthentication():void{
    this.isAuthenticated=this.authService.isAuthenticated();
  }

  async ngOnInit(){
    this.apiService.login('','');
  }

}
