import { Component, OnInit,Input } from '@angular/core';
import { User, UserService } from '../user.service';
import { Post, PostService } from '../post.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

   user:User;
   myUserArray:User[]
   friends:User[]=[];
   tempUser:User;
   posts:Post[];
   myPosts:Post[];
   
      
  constructor(private userService:UserService,private postService:PostService,
    private route: ActivatedRoute
    ) { 
      this.user = JSON.parse(localStorage.getItem('currentUser'));
    }

  ngOnInit() {
    this.getPosts();
  }

  addPost(post){
    this.posts.unshift(post);
  }
 
  getPosts():void {
    this.posts=this.postService.getAllPosts();   
  }

 removePost(id:number,i:number)
 {
    this.posts.splice(i, 1);
    this.postService.deletePost(id);

  }


}
