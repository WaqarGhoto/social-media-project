import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from './post.service';
import { User } from './user.service';

export class Comment{
  id:any;
  text:string;
  post:Post;
  user:User;

  public User(id:number,text:string,post:Post,user:User){
    this.id=id;
    this.text=text;
    this.post=post;
    this.user=user;
  }

}

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http :HttpClient) { }

  getAllComments(): Observable<Comment[]> {
    return this.http.get<Comment[]>('https://localhost:44316/comments');
  }

  addComment(text:string,post:Post,user:User):Observable<any>{
    var model=new Comment();
    model.text=text;
    model.post=post;
    model.user=user;
  return this.http.post<Comment>('https://localhost:44316/addcomment',model);
  }
  deleteComment(id: any) {
    return this.http.delete('https://localhost:44316/comments/'+id).subscribe(res => {});
  }



}
