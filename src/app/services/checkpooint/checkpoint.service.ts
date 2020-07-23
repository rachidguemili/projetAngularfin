import { Injectable } from '@angular/core';
import { Checkpoint } from 'src/app/shared/classes/checkpoint';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CheckpointService {

  private  url = "http://localhost:8080/checkpoints/";

  constructor(private http: HttpClient) { }

  getAllCheckpoints(): Observable<Checkpoint[]>{
    return this.http.get<Checkpoint[]>(this.url);
  }

  getCheckpointById(id: number): Observable<Checkpoint>{
    return this.http.get<Checkpoint>(this.url+id);
  }

  postCheckpoint(checkpoint): Observable<any>{
    return this.http.post<any>(this.url, checkpoint);
  }
  putCheckpoint(checkpoint): Observable<any>{
    return this.http.put<any>( this.url+ checkpoint.id, checkpoint);
  }
  deleteCheckpoint(id: number): Observable<void> {
    return this.http.delete<void>(this.url+ id);
  }
}
