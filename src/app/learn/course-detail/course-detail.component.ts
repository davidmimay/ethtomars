import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from './../../../environments/environment';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.scss']
})
export class CourseDetailComponent {

  playlistId: string;
  playlistUrl: string;
  safeUrl: any;
  githubUrl: string;

  videos: any[] = [];

  private youtubeUrl:string = "https://www.googleapis.com/youtube/v3";
  private apikey:string = environment.youtube.apikey;
  private nextpage:string = environment.youtube.nextpage;

  constructor(
    private route: ActivatedRoute,
    public sanitizer: DomSanitizer,
    public http:HttpClient,
  ) {
    this.playlistId = this.route.snapshot.paramMap.get('id');
    this.playlistUrl = `https://www.youtube.com/embed/videoseries?list=${this.playlistId}`;
    this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.playlistUrl);
    this.githubUrl = `https://www.github.com/orgs/ethtomars/${this.playlistId}`;
    this.getVideos().subscribe(videos => this.videos = videos);
  }

  getVideos() {
    let url = `${ this.youtubeUrl }/playlistItems`;
    let params = new HttpParams();

    params = params.append('part', 'snippet');
    params = params.append('maxResults', '100');
    params = params.append('playlistId', this.playlistId);
    params = params.append('key', this.apikey);


    return this.http.get( url, { params } ).pipe( map( (res: any) => {
      console.log(res);
      let videos: any[] = [];
      for ( let video of res.items ) {
        let snippet = video.snippet;
        videos.push( snippet );
      }
      return videos;
    }) );

  }

}