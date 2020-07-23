import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Course } from 'src/app/shared/classes/course';
import { Meet } from 'src/app/shared/classes/meet';

@Injectable({
  providedIn: 'root'
})
export class MeetService {

  private  url = "http://localhost:8080/meets/";

  constructor(private http: HttpClient) { }

  getAllMeets(): Observable<Meet[]>{
    return this.http.get<Meet[]>(this.url);
  }

  getMeetById(id: number): Observable<Meet>{
    return this.http.get<Meet>(this.url+id);
  }

  postMeet(meet): Observable<any>{
    return this.http.post<any>(this.url, meet);
  }
  putMeet(meet): Observable<any>{
    return this.http.put<any>( this.url+ meet.id, meet);
  }
  deleteMeet(id: number): Observable<void> {
    return this.http.delete<void>(this.url+ id);
  }
}
