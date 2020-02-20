import { Component, OnInit, Input,Output, EventEmitter } from '@angular/core';
import { Post } from '../post.service';
import { User } from '../user.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
  @Input() user:User;
  @Input() post:Post;
  @Output() deletePost = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
    console.log(this.post);
  }

  addLike()
  {
    this.post.likes=this.post.likes+1;
  }

  addComment()
  {
     
  }

  removePost()
  {
     this.deletePost.emit(this.post.id);
  }

}
