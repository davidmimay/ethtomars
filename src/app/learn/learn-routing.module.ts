import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoursesPageComponent } from './courses-page/courses-page.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { VideoDetailComponent } from './video-detail/video-detail.component';

const routes: Routes = [
  { path: '', component: CoursesPageComponent },
  { path: ':id', component: CourseDetailComponent },
  { path: ':id/:id', component: VideoDetailComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LearnRoutingModule { }
