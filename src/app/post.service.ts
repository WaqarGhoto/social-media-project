import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user.service';

export type Post ={
  id:string;
  userId:string;
  description:string;
  image:string;
  likes:number;
  commmentsCount:number;
}

@Injectable({
  providedIn: 'root'
})

export class PostService {

  postsList : any[] =[
    {
      id:'1',
      userId:'1',
      description:'First Post',
      image:'assets/images/user16.jpg'
    },
    {
      id:'2',
      userId:'1',
      description:'Second Post',
      image:'assets/images/post1.jpg'
    },
    {
      id:'3',
      userId:'1',
      description:'Third Post',
      image:'assets/images/post2.jpg'
    }
  ];

  constructor(private http :HttpClient) { }

  // getAllPosts(): Observable<Post[]> {
  //   return this.http.get<Post[]>('assets/posts.json');
  // }

  getAllPosts(): any[] {
       //return this.http.get<any>('https://localhost:44316/posts');
       return this.postsList;
   }

  addPost(post:Post):Observable<any>{
    
    return  this.http.post<Post>('https://localhost:44316/addpost',post);
  //   .subscribe(post => {
  //          console.log(post);
  //           return post;
  //  });
  }

  deletePost(id: any) {
    return this.http.delete('https://localhost:44316/posts/'+id).subscribe(res => {});
  }
}
