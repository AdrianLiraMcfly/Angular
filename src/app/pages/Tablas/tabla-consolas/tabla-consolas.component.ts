import { Component, Input } from '@angular/core';
import { ConsolesService } from '../../../Core/services/consoles.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Console } from '../../../Core/Interfaces/console.interface';

@Component({
  selector: 'app-tabla-consolas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tabla-consolas.component.html',
  styleUrl: './tabla-consolas.component.css'
})
export class TablaConsolasComponent {
@Input() consoles: Console[] = [];

constructor(private consolesService: ConsolesService, private router:Router) { }

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

editarConsola(id: number) {
  this.router.navigate(['/ConsolesForm', id]);
}

crearConsola(){
  this.router.navigate(['/ConsolesForm']);
} 
}
