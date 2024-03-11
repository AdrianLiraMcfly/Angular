import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormGroup, Validators, FormControl} from '@angular/forms';
import { UserService } from '../../Core/services/user.service';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{
  constructor(private user: UserService) { }
  submitted = false;
  loginSuccess = false;
  loginError = false;
  loginForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }
  onSubmit() {
    this.user.loginUsuario(this.loginForm.value).subscribe(response => {
      console.log(response);
      this.loginSuccess = true;
      this.loginError = false;
      localStorage.setItem('token', response['access_token']);
    }
    , error => {
      console.log(error);
      this.loginSuccess = false;
      this.loginError = true;
    });
    this.submitted = true;
    
  }
}
