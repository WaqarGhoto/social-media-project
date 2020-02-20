import { Component, OnInit ,Input,EventEmitter,Output} from '@angular/core';
import { User } from '../user.service';
import {Comment, CommentService } from '../comment.service';
import { ActivatedRoute } from '@angular/router';
import { equal } from 'assert';
import { Post } from '../post.service';


@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {


  @Input() user:User;
  @Input() post;
  comments_list:Comment[]=[];
  mycomments:Comment[];
  inputvalue:string;
  comments:Comment[]=[];
  comment:Comment;
  
  @Output() add = new EventEmitter<any>();
  
  constructor(private commentService:CommentService,private route: ActivatedRoute    
    ) { }

  ngOnInit() {
    //this.getCommentList();
    this.getComments();
  }

  getComments():void {
      this.commentService.getAllComments().subscribe(comments=> {
        this.mycomments=comments;
        for(var comment of comments) 
        {
            //console.log(comment.post)
            if(this.check(comment.post,this.post))
            {

              this.comments.push(comment);
            }
            //this.comments.push(comment);
        }

      } )
  }
  
  check(p1:Post,p2:Post):boolean {
       if(p1.id==p2.id)
       {
        return true;
       }
       return false;
  }




  addComment(value){
    
    if(value!='')
    {
        var cc=new Comment();
        cc.id=this.comments.length+1;
        cc.text=value;
        this.post.commentcount=this.comments.length;
        cc.post=this.post;
        cc.user=this.user;
        this.commentService.addComment(value,this.post,this.user).subscribe(res => {
          console.log(res);
          cc.id=res
        });

        this.comments.push(cc);
        
        this.inputvalue='';
    }else{
      console.log("Input Message is Empty");
    }

    //this.add.emit(this.post);

  }

  editComment(comment:Comment)
  {
         
         this.inputvalue=comment.text;
         var i=0;
         for(var com of this.comments)
         {
            if(com.id==comment.id && com.user==comment.user)
            {
                 
                  
                  this.comments.splice(i, 1);
                  this.commentService.deleteComment(comment.id);
                
            }
            i=i+1;
         }    
  }

  removeComment(i:number,id:number)
  {
    this.comments.splice(i, 1);
    console.log(id);
    this.commentService.deleteComment(id);

  }

}
