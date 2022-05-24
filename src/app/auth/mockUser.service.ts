import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MockUserService {

  // here we haev users data to login  
  // password = admin1234
private  usersList:any[]=[
    {
      id:'1',
      name:'waqar',
      email:'waqarahmad0727@gmail.com',
      password:'admin1234',
      image:'image',
      friend_list:[],
      friend_suggestion_list:[],
      posts_list:[],
    },
    {
      id:'2',
      name:'zain',
      email:'zain1234@gmail.com',
      password:'admin1234',
      image:'image',
      friend_list:[],
      friend_suggestion_list:[],
      posts_list:[]
    },
    {
      id:'3',
      name:'ghaffar',
      email:'ghaffar1234@gmail.com',
      password:'admin1234',
      image:'image',
      friend_list:[],
      friend_suggestion_list:[],
      posts_list:[]
    }

  ]
  constructor() { }

  async getUser(email:string,password:string):Promise<any>{
      return this.usersList.find(user=>user.email===email && user.password===password);
  }
}