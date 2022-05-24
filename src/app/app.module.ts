import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { PostListComponent } from './post-list/post-list.component';
import { FriendsListComponent } from './friends-list/friends-list.component';
import { FriendsSuggestionComponent } from './friends-suggestion/friends-suggestion.component';
import { CommentComponent } from './comment/comment.component';
import { UsersListComponent } from './users-list/users-list.component';
import { HttpClientModule }    from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { UserService } from './user.service';
import { PostService } from './post.service';
import { CommentService } from './comment.service';
import { PostDetailComponent } from './post-detail/post-detail.component';
import {FormsModule} from '@angular/forms';
import { AuthModule } from './auth/auth.module';
import { HeaderModule } from './header/header.module';
import { GlobalConfig, ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const toastConfig: Partial<GlobalConfig> = {
  timeOut:5000,
  closeButton:true,
  positionClass:'toast-top-right',
  newestOnTop:true,
  enableHtml:true,
  progressBar:false,
  progressAnimation:'increasing',
  preventDuplicates:true,
  countDuplicates:true,
  resetTimeoutOnDuplicate:true,
}


@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    PostListComponent,
    FriendsListComponent,
    FriendsSuggestionComponent,
    CommentComponent,
    UsersListComponent,
    HomeComponent,
    PostDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AuthModule,
    HeaderModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(toastConfig)
    
  ],
  providers: [UserService,PostService,CommentService],
  bootstrap: [AppComponent]
})
export class AppModule { }

