import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UserService } from '../../Core/services/user.service';
import { Register } from '../../Core/Interfaces/register';

@Component({
  selector: 'app-registrer',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './registrer.component.html',
  styleUrl: './registrer.component.css'
})
export class RegistrerComponent implements OnInit{

  constructor(private user:UserService ) { }

  register: Register= {email:'', name:'', password:'', password_confirmation:''};

  registrerForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    password_confirmation: new FormControl('', [Validators.required, Validators.minLength(6)]),
  });

  get name() { return this.registrerForm.get('name'); }
  get email() { return this.registrerForm.get('email'); }
  get password() { return this.registrerForm.get('password'); }
  get confirmPassword() { return this.registrerForm.get('password_confirmation'); }

  ngOnInit(): void {
  }
  onSubmit() {
    this.user.registrarUsuario(this.register).subscribe( data => {
      console.log(data);
    }
    );
  }
}
