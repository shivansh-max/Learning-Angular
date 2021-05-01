import {Component, OnDestroy, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, catchError} from 'rxjs/operators';
import {Post} from './post.model';
import {environment} from './../environments/environment';
import {PostsService} from './posts.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  loadedPosts: any = [];
  isFetching: boolean = false;
  restApi = environment.apiUrl;
  error = null;
  private sub: Subscription;
  constructor(private http: HttpClient, private postsService: PostsService) {
  }

  ngOnInit() {
    this.sub = this.postsService.error.subscribe(errorMessage => {
      this.error = errorMessage
      this.isFetching = false
    });

    console.log(this.loadedPosts);


    this.fetchPosts();

    // for (let post of this.loadedPosts.length) {
    console.log(this.loadedPosts);
    // }
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  onCreatePost(postData: Post) {
    this.postsService.createAndStorePost(postData)
    // this.fetchPosts();
  }

  onFetchPosts() {
    // Send Http request
    this.fetchPosts();
  }

  print(value) {
    console.log(value);
  }

  onClearPosts() {
    // Send Http request
    for (let post of this.loadedPosts) {
      this.postsService.deletePosts(post.id).subscribe(data => {
        this.fetchPosts();
      },
        (error) => {
          this.isFetching =false;
          this.error = error.message
        });
    }
  }

  private fetchPosts() {
    // This is the FireBase one
    // this.isFetching = true;
    // this.http
    //   .get<{ post:Post }>(
    //     ''https://learning-http-requests-cc51f-default-rtdb.firebaseio.com/posts.json''
    //   )
    //   .pipe(
    //     map(resoponseData => {
    //       const postsArray: Post[] = [];
    //       for (const key in resoponseData) {
    //         if (resoponseData.hasOwnProperty(key)) {
    //           postsArray.push({...resoponseData[key], id: key});
    //         }
    //       }
    //       return postsArray;
    //     })
    //   )
    //   .subscribe(posts => {
    //     this.isFetching = false;
    //     this.loadedPosts = posts;
    //   });
    // #1 Firebase attempt with my url
    // this.isFetching = true;
    // this.http
    //   .get<{ post:Post }>(
    //     '\'http://localhost:8080/posts/allresults/\''
    //   )
    //   .pipe(
    //     map(resoponseData => {
    //       const postsArray: Post[] = [];
    //       for (const key in resoponseData) {
    //         if (resoponseData.hasOwnProperty(key)) {
    //           postsArray.push({...resoponseData[key], id: key});
    //         }
    //       }
    //       return postsArray;
    //     })
    //   )
    //   .subscribe(posts => {
    //     this.isFetching = false;
    //     this.loadedPosts = posts;
    //   });
    // #2 Artical A
    // this.http
    //   .get('\'http://localhost:8080/posts/allresults/\'')
    //   .pipe(map(response => {
    //     const todos = response.json();
    //     return todos.map((post) => {
    //       ;
    //     });
    //   }))

    this.isFetching = true;
    this.postsService.fetchPosts().subscribe(
      posts => {
        // console.log(posts)
        // this.isFetching = false;
        this.isFetching = false;
        this.loadedPosts = posts;
      },
      (error) => {
        this.isFetching = false
        this.error = error.message
      }
    );

  }

  onHandleError() {
    this.error = null;
  }

}
