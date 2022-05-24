import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: any;
  password: any;
  logintext: string;

  constructor(private authService:AuthService , private router:Router ,private toastr:ToastrService) { }

  ngOnInit() {
    this.autoLogin();
  }


  async login()
  {
    var user=await this.authService.login(this.username,this.password);
    if(user!=null)
    {
      this.router.navigate(['home/'+'{{model.id}}']);
    }
    else{
         this.logintext="login Fail";
    }
  }

  autoLogin():void{
    const user=JSON.parse(localStorage.getItem('currentUser'));

    if(user)
    {
      this.toastr.info("auto login");
      this.authService.setCurrentUser(user);
      this.router.navigate(['home/'+'{{user.id}}']);
    }
    else{
         this.logintext="login Fail";
    }
  }
}
