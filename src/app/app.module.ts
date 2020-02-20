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
import { RouterModule, Routes } from '@angular/router';
import { UserService } from './user.service';
import { PostService } from './post.service';
import { CommentService } from './comment.service';
import { PostDetailComponent } from './post-detail/post-detail.component';
import {FormsModule} from '@angular/forms';
import { LoginComponent } from './login/login.component'

const routes: Routes = [
  { path: '', component: UsersListComponent },
  { path: 'home/:id', component: HomeComponent },
  { path: 'login', component: LoginComponent },
]

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
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  providers: [UserService,PostService,CommentService],
  bootstrap: [AppComponent]
})
export class AppModule { }

