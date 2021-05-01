import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Post} from './post.model';
import {map, catchError} from 'rxjs/operators';
import {environment} from '../environments/environment';
import {Subject, throwError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  restApi = environment.apiUrl;
  error = new Subject<string>();

  constructor(private http: HttpClient) {
  }

  createAndStorePost(postData: Post) {
// console.log(postData);
    let title = postData.title;
    let content = postData.content;
    let stri = Math.random().toString(36).substring(2);
    var post_json = {postkey: stri, posttitle: title, postcontent: content};
    this.http.post(
      // 'http://localhost:8080/posts/addpost',
      this.restApi + 'posts/addpost',
      post_json).subscribe(
      (responseData) => {
        console.log(responseData);
      },
      (error) => {
        this.error.next(error.message);
      });

  }

  fetchPosts() {
    return this.http.get(this.restApi + 'posts/allresults',
      {
        headers: new HttpHeaders({'Custom-Header': 'Hello'})
      }).pipe(
      map(
        (posts) => {
          const postsArray = [];
          for (let key in posts) {
            postsArray.push({id: posts[key].postkey, title: posts[key].posttitle, content: posts[key].postcontent});
          }
          return postsArray;
        }
      ),
      catchError(
        (errorRes) => {
          console.log(errorRes);
          return throwError(errorRes);
        }
      )
    );
  }

  deletePosts(id: string) {
    return this.http.delete(this.restApi + '/posts/destroyposts/' + id);
  }
}
