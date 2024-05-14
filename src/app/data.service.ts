import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get<any[]>('https://jsonplaceholder.typicode.com/users');
  }

  createUser(user: any) {
    return this.http.post('https://jsonplaceholder.typicode.com/users', user);
  }

  updateUser(userId: number, updatedUser: any) {
    return this.http.put(`https://jsonplaceholder.typicode.com/users/${userId}`, updatedUser);
  }

  deleteUser(userId: number) {
    return this.http.delete(`https://jsonplaceholder.typicode.com/users/${userId}`);
  }
}


//promise
//observable