import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Student } from 'src/app/shared/classes/student';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {


  private  url = "http://localhost:8080/";

  constructor(private http: HttpClient) { }

  getAllStudents(): Observable<Student[]>{
    return this.http.get<Student[]>(this.url);
  }

  getStudentById(id: number): Observable<Student>{
    return this.http.get<Student>(this.url+id);
  }

  postStudent(student): Observable<any>{
    return this.http.post<any>(this.url, student);
  }
  putStudent(student): Observable<any>{
    return this.http.put<any>( this.url+ student.id, student);
  }
  deleteStudent(id: number): Observable<void> {
    return this.http.delete<void>(this.url+ id);
  }
}
