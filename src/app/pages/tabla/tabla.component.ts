import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tabla',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tabla.component.html',
  styleUrl: './tabla.component.css'
})
export class TablaComponent {
@Input() data: any[] = [];
@Input() headers: string[] = [];

delete(index: number) {
  this.data.splice(index, 1);
}
}
