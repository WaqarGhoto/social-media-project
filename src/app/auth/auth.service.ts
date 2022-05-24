import { Injectable } from '@angular/core';
import { MockUserService } from './mockUser.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 
  user:any;
  constructor(private mockUserServise:MockUserService) { }

  async login(email:string,password:string):Promise<any>{
    this.user =await this.mockUserServise.getUser(email,password);
    if(this.user){
      localStorage.setItem('currentUser', JSON.stringify(this.user));
    }
    return this.user;
  }

  logout():void{
    this.user=null;
    localStorage.removeItem('currentUser');
  }

  isAuthenticated():boolean{
    const currentUser = localStorage.getItem('currentUser');
    return !!currentUser;
  }

  getCurrentUser():any{
    return this.user;
  }
  
  setCurrentUser(user):void{
    this.user=user;
  }
  
}
