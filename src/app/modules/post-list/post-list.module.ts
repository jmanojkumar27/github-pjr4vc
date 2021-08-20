import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostListRoutingModule } from './post-list-routing.module';
import { PostListComponent } from './post-list.component';
import { CommentsComponent } from '../comments/comments.component';
import { CommentboxComponent } from '../commentbox/commentbox.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    PostListComponent,
    CommentboxComponent,
    CommentsComponent,
  ],
  imports: [
    CommonModule,
    PostListRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PostListModule { }
