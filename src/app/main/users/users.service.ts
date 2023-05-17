import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/api/models';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]>{
    return this.http.get<User[]>(`/users`)
  }

  deleteUser(userId: number){
    return this.http.delete('/users', {params: {userId}})
  }

  createUser(user: User){
    return this.http.post('/users', user)
  }

  updateUser(userId: number, user:User){
    return this.http.put('/users', user, {params: {userId}})
  }
}
