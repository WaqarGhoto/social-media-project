import { Component, OnInit ,Input, Output,EventEmitter} from '@angular/core';
import { User } from '../user.service';
import { Post, PostService } from '../post.service';
import { HttpClient } from '@angular/common/http';
// import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input() user:User;
  @Output() add = new EventEmitter<any>();
  post:Post;
  inputvalue:string;


  fileData: File = null;
  previewUrl:any = null;
  fileUploadProgress: string = null;
  uploadedFilePath: string = null;
constructor(private http: HttpClient, private postService:PostService) { }

  ngOnInit() {

  }

  addPost(){
 
    this.post.userId=this.user.id;
    this.post.description=this.inputvalue;
    this.post.image=this.previewUrl;
    this.post.likes=0;
    this.post.commmentsCount=0;
    this.postService.addPost(this.post).subscribe(res=>{
          this.post.id=res;
    });
    this.add.emit(this.post);
    this.inputvalue='';
    this.previewUrl=null;
    
  }
  
  closeImage()
  {
    this.previewUrl=null;
    

  }

fileProgress(fileInput: any) {
    this.fileData = <File>fileInput.target.files[0];
    this.preview();
}

preview() {
  // Show preview 
  var mimeType = this.fileData.type;
  if (mimeType.match(/image\/*/) == null) {
    return;
  }

  var reader = new FileReader();      
  reader.readAsDataURL(this.fileData); 
  reader.onload = (_event) => { 
    this.previewUrl = reader.result; 
    console.log(this.previewUrl)
  }
}

onSubmit() {
  const formData = new FormData();
    formData.append('file', this.fileData);
    // this.http.post('url/to/your/api', formData)
    //   .subscribe(res => {
    //     console.log(res);
    //     this.uploadedFilePath = res.data.filePath;
    //     alert('SUCCESS !!');
    //   })
}

}
