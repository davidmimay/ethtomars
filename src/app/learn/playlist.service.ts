import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';

declare var $:any;

@Injectable({
  providedIn: 'root'
})
export class PlaylistService {

  private youtubeUrl:string = "https://www.googleapis.com/youtube/v3";
  private apikey:string = environment.youtube.apikey;
  private channel:string = environment.youtube.channel;
  private nextpage:string = environment.youtube.nextpage;
  
  constructor(public http:HttpClient) {}

  getVideos() {
    let url = `${ this.youtubeUrl }/playlists`;
    let params = new HttpParams();
 
    params = params.append('part', 'snippet' );
    // params = params.append('maxResults', '4' );
    params = params.append('channelId', this.channel );
    params = params.append('key', this.apikey );

    /*
    if ( this.nextpage ) {
      params = params.append('pageToken', this.nextpage );
    }
    */
 
    return this.http.get( url, { params } ).pipe( map( (res: any) => {
      console.log(res);
      // this.nextpage = res.nextpage;
      let videos: any[] = [];
      
      for ( let playlist of res.items ) {
        //let snippet = video.snippet;
        videos.push( playlist );
      }
      
      return videos;
    }) );

  }
}
