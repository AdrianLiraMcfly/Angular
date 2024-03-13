import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormGroup, Validators, FormControl} from '@angular/forms';
import { UserService } from '../../Core/services/user.service';
import { Login } from '../../Core/Interfaces/login';
import { Router } from '@angular/router';
import { VerifyCode } from '../../Core/Interfaces/verifyCode';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{
  constructor(private user: UserService, private router:Router) { }

  error_msg = {email: '', password: ''};


  login: Login = {email: '', password: ''};
  verifyCode: VerifyCode = {email: '', code: '', password: ''};
  submitted = false;
  showCodeVeryfication = false;
  loginSuccess = false;
  loginError = false;

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
  });

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }
  onSubmit() {

    this.submitted = true;
    this.user.loginUsuario(this.login).subscribe((response) => {
        if(response.msg === 'Insert Code, Check Your Email') {
        this.error_msg.email = '';
        this.error_msg.password = '';
        this.showCodeVeryfication = true;
        this.verifyCode.email = this.login.email;
        this.verifyCode.password = this.login.password;
      } else {
        this.loginSuccess = false;
        this.loginError = true;
      }
    },
    (error) => {
     this.error_msg.email = '',
      this.error_msg.password = '';
      if(error.mesages === 'invalid_credentials') {
        this.error_msg.email = 'Email or password is incorrect';
      }
      if(error.status === '403') {
        this.loginError = true;
        this.error_msg.email = 'Email or password is incorrect';
      }
      if(error.mesages === 'invalid_email') {
        this.error_msg.email = 'Email is incorrect';
      }
      if(error.mesages === 'invalid_password') {
        this.error_msg.password = 'Password is incorrect';
      }
    }
    
    );
  }

  onCodeSubmit() {
    this.user.verifyCode(this.verifyCode).subscribe(
      response => {
        if(response.access_token) {
          localStorage.setItem('token', response.access_token);
          this.user.Me().subscribe(response => {
            localStorage.setItem('user', JSON.stringify(response));
          });
          this.router.navigate(['/tabla']);
          console.log(response);
        }
      }
    );
  }
}
