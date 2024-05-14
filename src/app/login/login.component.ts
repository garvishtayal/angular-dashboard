import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;

  username: string = '';
  password: string = '';

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    
    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value;
      console.log(this.loginForm.value.username)

      if (username === 'test' && password === '123') {
        localStorage.setItem('isLoggedIn', 'true');
        alert('Logged in successfully!');
        window.location.href = "/main";
      } else {
        localStorage.setItem('isLoggedIn', 'false');
        alert('Invalid username or password');
      }
    }
  }
}
