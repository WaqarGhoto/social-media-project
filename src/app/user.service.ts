import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


export class UserAuth{
     username:string;
     password:string;
     public UserAuth(uname:string,pass:string)
     {
       this.username=uname;
       this.password=pass;
     }
}




export class User{
  
  id:string;
  name:string;
  image:string;
  friend_list:number[];
  friend_suggestion_list:number[];
  posts_list:number[]

  constructor(id:string,name:string,image:string,friend_list:number[],friend_suggestion_list:number[],post_list:number[]){
          this.id=id;
          this.name=name;
          this.image=image;
          this.friend_list=friend_list;
          this.friend_suggestion_list=friend_suggestion_list;
          this.posts_list=post_list;
  }
}



@Injectable({
  providedIn: 'root'
})
export class UserService {

  // here I create the logic when the user is loged in 
  user:User;
  id:string;

  usersList:any[]=[
    {
      id:'1',
      name:'waqar',
      image:'image',
      friend_list:[],
      friend_suggestion_list:[],
      posts_list:[]
    },
    {
      id:'2',
      name:'zain',
      image:'image',
      friend_list:[],
      friend_suggestion_list:[],
      posts_list:[]
    },
    {
      id:'3',
      name:'ghaffar',
      image:'image',
      friend_list:[],
      friend_suggestion_list:[],
      posts_list:[]
    }

  ]

  constructor(private http :HttpClient) { }

  getAllUsers(): User[] {
    return this.usersList;
    //return this.http.get<User[]>('https://localhost:44316/facebookusers');
  }

  
  getFriends(id:string): Observable<User[]> {
    return this.http.get<User[]>('https://localhost:44316/friends/'+id);
  }

  getFriendSuggestion(id:string): Observable<User[]> {
    return this.http.get<User[]>('https://localhost:44316/friendsuggestion/'+id);
  }
  
  login(username: string, password: string) {
    
    var tempmodel=new UserAuth();
    tempmodel.username=username;
    tempmodel.password=password;
    console.log(tempmodel);
    localStorage.setItem('currentUser', JSON.stringify({username:username,password:password}));
  //   return  this.http.post<any>('https://localhost:44316/facebook/authenticate',tempmodel)
  //   .subscribe(user => {
      
  //     //console.log(user);
  //     console.log(user.id);
  //           if (user) {
  //               // store user details and jwt token in local storage to keep user logged in between page refreshes
  //               localStorage.setItem('currentUser', JSON.stringify(user));
  //           }
           
  //           //console.log(user);
  //          // this.user=user;
  //           console.log(user);
  //           return user;

  //  });
  }



}
