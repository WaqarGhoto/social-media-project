import { Component, OnInit } from '@angular/core';
import { User, UserService } from '../user.service';
import { ActivatedRoute } from '@angular/router';
import {Post, PostService } from '../post.service';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // user:User;
   user:User;
   myUserArray:User[]
   friends:User[]=[];
   friends_suggestion:User[]=[];
   tempUser:User;
   public posts:Post[];
   myPosts:Post[];   
   
  constructor(private userService:UserService,private postService:PostService,
    private route: ActivatedRoute,private router: Router
    ) { 
       this.user = JSON.parse(localStorage.getItem('currentUser'));
       console.log(this.user);
       //localStorage.removeItem('currentUser');
       //localStorage.clear();
       //console.log(this.user);  its ok
       console.log(this.user);
       
    }

  ngOnInit() {
    //this.getUser();
    //this.getmyPosts();
    //this.getPosts();
    this.getUserFriendSuggestions();
    this.getPosts();
    this.getUserFriends();
    
  }

  getPosts():void {
    this.postService.getAllPosts()
    .subscribe(posts=> this.posts = posts);
  }

  // getUser() {
  //   const id = +this.route.snapshot.paramMap.get('id');
  //     this.userService.getAllUsers()
  //     .subscribe(users=> {
  //      this.myUserArray = users;
  //      this.user = this.myUserArray.filter(
  //         item => item.id == id)[0];
  //         //this.getPosts();  
  //         //console.log(this.posts_list)
  //         //this.getFriends();
  //         //this.getFriendsSuggestions();
           
  //     });
      
  // }

  

  // getmyPosts(): void {
  //   this.postService.getAllPosts()
  //   .subscribe(posts => this.posts = posts);
  //   console.log(this.posts);
  // }

  // getPosts() {    
  //   this.postService.getAllPosts().subscribe(posts=>{
  //      //this.posts_list=posts
  //     //  for(var fid of this.user.posts_list)
  //     //  {
  //     //    this.posts_list.push(posts[fid]);
  //     //   }

  //   });  
  // }

   getUserFriends()
   {
       this.userService.getFriends(this.user.id).subscribe(res=>{
          this.friends=res;
       })
   }
   
   getUserFriendSuggestions()
   {
       this.userService.getFriendSuggestion(this.user.id).subscribe(res=>{
          this.friends_suggestion=res;
          console.log(this.friends_suggestion);
       })
   }


  getFriends() {
    this.myUserArray=this.userService.getAllUsers(); 
       for(var fid of this.user.friend_list)
       {
         this.friends.push(this.myUserArray[fid]);
       }    
  }
 
  // getFriendsSuggestions() {
  //   this.userService.getAllUsers().subscribe(users=>{
  //      this.myUserArray=users
  //      for(var fid of this.user.friend_suggestion_list)
  //      {
  //        this.friends_suggestion.push(users[fid]);
  //      } 
  //    }); 
  // }

  addFriendP(frind){ 
      this.friends.push(frind);
     
  }
  
  logout()
  {
    localStorage.removeItem('currentUser');
    this.router.navigate(['home/'+'{{model.id}}']);
  }

}
