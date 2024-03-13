import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from '../../../Core/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabla',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tabla.component.html',
  styleUrl: './tabla.component.css'
})
export class TablaComponent {
  @Input() users: any[] = [];

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.userService.getUser().subscribe((response: any) => {
      this.users = response.user;
    });
  }

  crearUser() {
    this.router.navigate(['/UsuariosForm']);
  }
  
  deleteUser(id: number) {
    this.userService.deleteUser(id).subscribe((response: any) => {
      this.users = this.users.filter((user: any) => user.id !== id);
    });
  }

  editarUsuario(id: number) {
    this.router.navigate(['/UsuariosForm', id]);
  }
}
