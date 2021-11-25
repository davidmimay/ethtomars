import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './video-detail.component.html',
  styleUrls: ['./video-detail.component.scss']
})
export class VideoDetailComponent {

  videoUrl: string;
  videoId: string;

  constructor(
    private route: ActivatedRoute,
  ) { 
    this.videoId = this.route.snapshot.paramMap.get('id');
  }

}
