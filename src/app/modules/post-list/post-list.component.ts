import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { RoutesEnum } from 'src/app/routes.enum';
import { PostsService } from 'src/app/store/posts.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
  public comments: string = ""
  public count: number = 0;
  enable:boolean
  constructor(
    public postsService: PostsService,
    private router: Router,
  ) { }
 

  createPost() {
    this.router.navigateByUrl(RoutesEnum.newPost)
  }

  ngOnInit() {
    this.count = 0;
  }

  receiveComment($event: string, i: any) {
    this.comments = $event;
    console.log(this.comments)
    console.log(this.postsService.state$['_events'][0],"inside")
    this.postsService.state$['_events'][0][i]['comments'].push(this.comments);
    this.count = this.comments.length;
  }

  recieveCount($event: string) {
    this.comments = $event;
    this.count = this.comments.length;
  }
  toggleAccordian(index:number){
    this.postsService.state$['_events'][0][index].isActive =  true;
  }
  enableAuth(){
    localStorage.setItem("isAuth",JSON.stringify(this.enable ? this.enable : false ))
  }
}
