import {
    Component,
    OnInit,
    Input,
    Output,
    OnChanges,
    EventEmitter,
    Directive,
    ViewContainerRef,
    ViewChildren,
    QueryList,
    ComponentFactoryResolver,
    AfterContentInit
  } from '@angular/core';
  
  @Directive({
    // tslint:disable-next-line:directive-selector
    selector: '[datacontainer]'
  })
  export class DatacontainerDirective {
    constructor(public viewContainerRef: ViewContainerRef) {}
  }
  
  @Component({
    selector: 'app-comments',
    templateUrl: './comments.component.html',
    styleUrls: ['./comments.component.css']
  })
  export class CommentsComponent implements OnInit, OnChanges {
    @Input() postComment: Array<object> = [];
    @Output() countComments = new EventEmitter();
    myDate: Date = new Date();
    public loadComponent = false;
    public commentIndex = 0;
    public reply: Array<object> = [];

    @ViewChildren(DatacontainerDirective) entry: QueryList<
        DatacontainerDirective
    > | undefined;
  
    constructor(private resolver: ComponentFactoryResolver) {}
  
    ngOnInit() {}
  
    ngOnChanges() {
      if (this.postComment !== undefined) {
        console.log('Main array====>', this.postComment);
      }
    }
  }
  