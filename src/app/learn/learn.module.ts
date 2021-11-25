import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LearnRoutingModule } from './learn-routing.module';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { CoursesPageComponent } from './courses-page/courses-page.component';
import { SharedModule } from './../shared/shared.module';
import { VideoDetailComponent } from './video-detail/video-detail.component';

@NgModule({
  declarations: [
    CourseDetailComponent,
    CoursesPageComponent,
    VideoDetailComponent,
  ],
  imports: [
    CommonModule,
    LearnRoutingModule,
    SharedModule,
  ]
})
export class LearnModule { }
