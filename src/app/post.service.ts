import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user.service';

export class Post{
  id:number;
  user:User;
  description:string;
  image:string;
  likes:number;
  commmentsCount:number;

  public Post(id:number,user:User,description:string,data_image:string)
  {
      this.id=id;
      this.user=user;
      this.description=description;
      this.image=data_image;
      this.likes=0;
      this.commmentsCount=0;
  }
}

@Injectable({
  providedIn: 'root'
})

export class PostService {


  constructor(private http :HttpClient) { }

  // getAllPosts(): Observable<Post[]> {
  //   return this.http.get<Post[]>('assets/posts.json');
  // }

  getAllPosts(): Observable<any> {
       return this.http.get<any>('https://localhost:44316/posts');
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
