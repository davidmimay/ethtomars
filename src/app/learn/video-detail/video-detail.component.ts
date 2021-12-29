import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from './../../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  templateUrl: './video-detail.component.html',
  styleUrls: ['./video-detail.component.scss']
})
export class VideoDetailComponent {

  videoUrl: string;
  videoId: string;
  comments: any[] = [];
  
  private youtubeUrl:string = 'https://www.googleapis.com/youtube/v3';
  private apikey:string = environment.youtubeAPI;

  constructor(
    private route: ActivatedRoute,
    public http:HttpClient,
  ) {
    this.videoId = this.route.snapshot.paramMap.get('id');
    this.getComments().subscribe(comments => this.comments = comments);
    this.videoUrl = `https://www.youtube.com/watch?v=${this.videoId}`;
  }

  getComments() {
    let url = `${ this.youtubeUrl }/commentThreads`;
    let params = new HttpParams();

    params = params.append('part', 'snippet, replies');
    params = params.append('maxResults', '5');
    params = params.append('videoId', this.videoId);
    params = params.append('key', this.apikey);


    return this.http.get( url, { params } ).pipe( map( (res: any) => {
      console.log(res);
      let comments: any[] = [];
      for ( let comment of res.items ) {
        let snippet = comment.snippet.topLevelComment.snippet;
        comments.push( snippet );
      }
      return comments;
    }) );

  }

}
