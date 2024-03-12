import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsolesService } from '../../../Core/services/consoles.service';
@Component({
  selector: 'app-tabla-consolessales',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tabla-consolessales.component.html',
  styleUrl: './tabla-consolessales.component.css'
})
export class TablaConsolessalesComponent {
@Input() consolessales: any[] = [];
constructor(private consolesService: ConsolesService) { }

ngOnInit() {
  this.consolesService.getConsoles().subscribe((response: any) => {
    this.consolessales = response.consoles;
  });
}

deleteConsole(id: number) {
  this.consolesService.delateConsole(id).subscribe((response: any) => {
    this.consolessales = this.consolessales.filter((console: any) => console.id !== id);
  });
}
}
