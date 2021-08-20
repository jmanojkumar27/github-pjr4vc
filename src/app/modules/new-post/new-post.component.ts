import { Component, OnInit } from '@angular/core';
import { PostsService } from "../../store/posts.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {

  postTextArea = '';
  postTitle = "";
  enable: boolean = false;
  constructor(
    private postsService: PostsService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  submit() {
    if (!this.postTitle || !this.postTextArea) {
      this.enable = true
      return
    }
    this.postsService.addPost({
      texttrea: this.postTextArea,
      postTitle: this.postTitle,
      comments: []
    })
    this.router.navigateByUrl('posts')
  }

}
