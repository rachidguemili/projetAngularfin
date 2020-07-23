import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Teacher } from 'src/app/shared/classes/teacher';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  private  url = "http://localhost:8080/teachers/";
  constructor(private http: HttpClient) { }

  getAllTeachers(): Observable<Teacher[]>{
    return this.http.get<Teacher[]>(this.url);
  }

  getTeacherById(id: number): Observable<Teacher>{
    return this.http.get<Teacher>(this.url+id);
  }

  postTeacher(student): Observable<any>{
    return this.http.post<any>(this.url, student);
  }
  putTeacher(teacher): Observable<any>{
    return this.http.put<any>( this.url+ teacher.id, teacher);
  }
  deleteTeacher(id: number): Observable<void> {
    return this.http.delete<void>(this.url+ id);
  }
}
