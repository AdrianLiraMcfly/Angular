import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { UserRegis } from '../../../../Core/Interfaces/UserRegis';
import { User, Role } from '../../../../Core/Interfaces/user';
import { UserService } from '../../../../Core/services/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormsModule, ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-usuarios',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './form-usuarios.component.html',
  styleUrl: './form-usuarios.component.css'
})
export class FormUsuariosComponent {
@Input() usuarios: UserRegis[] = [];
@Input() user!:User;

  constructor(private userService: UserService, private router:Router, private routers:ActivatedRoute) {}

  public id = this.routers.snapshot.paramMap.get('id');
  ngOnInit() {
    if (this.id) {
      this.userService.getUserById(Number(this.id)).subscribe((response: any) => {
        this.user = response.user;
        this.userForm.patchValue({
          name: this.user.name,
          email: this.user.email,
        });
      });
    }
  }

  userRegis: UserRegis = {name: '', email: '', role_id: 0, password: '', password_confirmation: ''};

  userForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    passwordConfirm: new FormControl('', [Validators.required]),
    rol_id: new FormControl('', [Validators.required]),
  });

  get name() { return this.userForm.get('name'); }
  get email() { return this.userForm.get('email'); }
  get password() { return this.userForm.get('password'); }
  get rol_id() { return this.userForm.get('rol_id'); }
  get passwordConfirm() { return this.userForm.get('passwordConfirm'); }

  onSubmit() {
    console.log(this.userRegis);
      this.userService.updateUser(this.userRegis, Number(this.id)).subscribe((response: any) => {
        this.router.navigate(['/tabla']);
      });
    
  }
}
