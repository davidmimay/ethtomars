import { Component, OnInit } from '@angular/core';
import { Course } from './course.model';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';


@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.scss']
})
export class CoursesPageComponent implements OnInit {

  constructor(
    private db: AngularFirestore,
  ) {}

    coursesCollection: AngularFirestoreCollection<Course>;
    coursesObservable: Observable<Course[]>;

  ngOnInit() {
    this.coursesCollection = this.db.collection('courses');
    this.coursesObservable = this.coursesCollection.valueChanges();
  }

}