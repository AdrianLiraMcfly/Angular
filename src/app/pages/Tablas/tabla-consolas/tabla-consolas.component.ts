import { Component, Input } from '@angular/core';
import { ConsolesService } from '../../../Core/services/consoles.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tabla-consolas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tabla-consolas.component.html',
  styleUrl: './tabla-consolas.component.css'
})
export class TablaConsolasComponent {
@Input() consoles: any[] = [];

constructor(private consolesService: ConsolesService) { }

ngOnInit() {
  this.consolesService.getConsoles().subscribe((response: any) => {
    this.consoles = response.consoles;
  });
}

deleteConsole(id: number) {
  this.consolesService.delateConsole(id).subscribe((response: any) => {
    this.consoles = this.consoles.filter((console: any) => console.id !== id);
  });
}
}
