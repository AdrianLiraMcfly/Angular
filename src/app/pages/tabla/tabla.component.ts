import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from '../../Core/services/user.service';

@Component({
  selector: 'app-tabla',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tabla.component.html',
  styleUrl: './tabla.component.css'
})
export class TablaComponent {
  @Input() users: any;
  constructor(private userService: UserService) { }
  ngOnInit() {
    this.userService.getUser().subscribe((user: any) => {
      this.users = user;
    });
  }
}
