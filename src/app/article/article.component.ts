import { PostDialogComponent } from './post-dialog/post-dialog.component';
import { AuthService } from './../Services/auth/auth.service';
import { Post } from './../models/Post';
import { DataService } from '../Services/data/data.service';

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs/internal/Observable';
import { DataSource } from '@angular/cdk/table';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';



export interface CommentClass {
  userName: string;
  commentDate: Date;
  commentContent: string;
}

export class PostDataSource extends DataSource<any> {
  constructor(private dataService: DataService) {
    super();
  }

  connect(): Observable<Post[]> {
    return this.dataService.getData();
  }

  disconnect(): void {}
}


@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
})
export class ArticleComponent implements OnInit {
  titleOftheArticle = 'Shibuya Dog & City';
  author: string = 'Benyakoub';
  publicationDate: Date = new Date();
  favorite: boolean = false;
  like: boolean = false;
  CommentForm: FormGroup;
  showComment: boolean = true;
  commentsList: CommentClass[] = [];

  isFetching = false;
  instructive = false;

  panelOpenState = false;

  isAuthenticated: boolean;
  displayedColumns = ['date_posted', 'title', 'category', 'delete'];
  dataSource = new PostDataSource(this.dataService);

  constructor(
    private fb: FormBuilder,
    private snackBar: MatSnackBar,
    private dataService: DataService,
    private auth: AuthService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.CallCommentForm();
  }

  CallCommentForm(): void {
    this.CommentForm = this.fb.group({
      comment: ['', Validators.required],
    });
  }

  onSubmit(value: Comment, comment: string): void {
    // test if the personne is loggeed
    console.log('Comment was submitted : ', Comment);

    const commentObject: CommentClass = {
      userName: this.author,
      commentDate: new Date(),
      commentContent: comment,
    };

    this.commentsList.push(commentObject);
    localStorage.setItem('comments', JSON.stringify(this.commentsList));
    this.CommentForm.reset();
    this.snackBar.open('Thank you for commenting', 'okey', {
      duration: 2000,
    });
    // if (this.isAuthenticated) {
    //   this.acrud
    //     .CreateComment(
    //       value,
    //       this.currentUserId,
    //       this.post_userid,
    //       this.posttitle,
    //       this.postdesc
    //     )
    //     .then(() => {
    //       this.CommentForm.reset();
    //       setTimeout(() => {
    //         window.location.reload();
    //       }, 900);
    //     });
    // } else {
    //   alert('Please Login or create your account to do Comment');
    // }
  }

  deletePost(id): void {
    alert('post deleted');
    console.log('ID of post deleted : ', id);

    if (this.auth.isAuthenticated()) {
      this.dataService.deletePost(id);
      this.dataSource = new PostDataSource(this.dataService);
    } else {
      alert('Login in Before');
    }
  }

  addArticleDialog(): void {
    const dialogRef = this.dialog.open(PostDialogComponent, {
      width: '600px',
      data: 'Add Post',
    });
    dialogRef.componentInstance.event.subscribe((result) => {
      this.dataService.addPost(result.data);
      this.dataSource = new PostDataSource(this.dataService);
    });
  }
}
