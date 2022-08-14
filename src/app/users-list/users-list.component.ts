import { Component, OnInit } from '@angular/core';
import { User, UserService } from '../user.service';
import {  Router } from '@angular/router';
import { PostService, Post } from '../post.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  public users:User[];
  public posts:Post[];
  public username:string="waqarahmad0727@gmail.com";
  public password:string="ghoto1234";
  public logintext:string;
  constructor(private postService:PostService, private userService:UserService,private router: Router) { }

  ngOnInit() {
    this.getUsers();
    //this.getPosts();
    
  }
  
  getPosts():void {
    this.posts=this.postService.getAllPosts();
  }

  getUsers(): void {
    this.users=this.userService.getAllUsers();
  }

  login()
  {
    console.log(this.username);
    console.log(this.password);
    var model=this.userService.login(this.username,this.password);
    var user=JSON.parse(localStorage.getItem('currentUser'));
    if(user!=null)
    {
      this.router.navigate(['home/'+'{{model.id}}']);
    }
    else{
         this.logintext="login Fail";
    }
   
    

  }
   
}
