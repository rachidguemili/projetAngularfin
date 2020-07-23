import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from 'src/app/shared/classes/course';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CourseService {



  private  url = "http://localhost:8080/courses/";

  constructor(private http: HttpClient) { }

  getAllCourses(): Observable<Course[]>{
    return this.http.get<Course[]>(this.url);
  }

  getCourseById(id: number): Observable<Course>{
    return this.http.get<Course>(this.url+id);
  }

  postCourse(course): Observable<any>{
    return this.http.post<any>(this.url, course);
  }
  putCourse(course): Observable<any>{
    return this.http.put<any>( this.url+ course.id, course);
  }
  deleteCourse(id: number): Observable<void> {
    return this.http.delete<void>(this.url+ id);
  }
}
