import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import { User } from '../user.service';


@Component({
  selector: 'app-friends-suggestion',
  templateUrl: './friends-suggestion.component.html',
  styleUrls: ['./friends-suggestion.component.css'],

})
export class FriendsSuggestionComponent implements OnInit {
  
  @Input() user;
  @Input() friends;
  @Input() friends_suggestion;
  @Output() confirm = new EventEmitter<any>();

  constructor(
    ) { }

  ngOnInit() {
    
  }
  addFriend(friend){
      console.log(friend);
      for( var i = this.friends_suggestion.length; i--;){
        if ( this.friends_suggestion[i] === friend) this.friends_suggestion.splice(i, 1);
      }
      this.confirm.emit(friend);
  }
 
}
