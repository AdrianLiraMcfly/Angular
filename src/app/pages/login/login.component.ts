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

  login: Login = {email: '', password: ''};
  verifyCode: VerifyCode = {email: '', code: '', password: ''};
  submitted = false;
  showCodeVeryfication = false;
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

    this.submitted = true;
    this.user.loginUsuario(this.login).subscribe(
      response => {
        if(response.msg === 'Insert Code, Check Your Email') {
        this.loginSuccess = true;
        this.loginError = false;
        this.showCodeVeryfication = true;
        this.verifyCode.email = this.login.email;
        this.verifyCode.password = this.login.password;
      } else {
        this.loginSuccess = false;
        this.loginError = true;
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
