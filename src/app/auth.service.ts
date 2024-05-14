import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn(): boolean {
    const loggedIn = localStorage.getItem('isLoggedIn');
    return loggedIn === 'true';
  }
}
