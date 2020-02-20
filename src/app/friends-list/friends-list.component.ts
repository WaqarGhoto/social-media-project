import { Component, OnInit ,Input} from '@angular/core';
import { User, UserService } from '../user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-friends-list',
  templateUrl: './friends-list.component.html',
  styleUrls: ['./friends-list.component.css']
})
export class FriendsListComponent implements OnInit {

  @Input() user;
  @Input() friends;

  //  myUserArray:User[]
   //friends:User[]=[];
  //  tempUser:User;
  //  friends_ids:number[];
   
  constructor(
    ) { }

  ngOnInit() {
    //this.getUser();
  }

  // getUser() {
  //   const id = +this.route.snapshot.paramMap.get('id');
  //     this.userService.getAllUsers()
  //     .subscribe(users=> {
  //      this.myUserArray = users;
  //      this.user = this.myUserArray.filter(
  //         item => item.id === id)[0];
  //         this.friends_ids=this.user.friend_list;
  //         this.getFriends()  
           
  //     });
      
  // }

  // getFriends() {
  //     //  console.log(this.user);
  //     this.userService.getAllUsers().subscribe(users=>{
  //        this.myUserArray=users
  //        for(var fid of this.user.friend_list)
  //        {
  //          this.friends.push(users[fid]);
  //        }
         
        
  //   });
      
  // }

}
