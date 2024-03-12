import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsoleOrdersService } from '../../../Core/services/console.orders.service';


@Component({
  selector: 'app-tabla-consoleorders',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tabla-consoleorders.component.html',
  styleUrl: './tabla-consoleorders.component.css'
})
export class TablaConsoleordersComponent {
@Input() consoleorders: any[] = [];

constructor(private consoleOrdersService: ConsoleOrdersService) { }

ngOnInit() {
  this.consoleOrdersService.getConsoleOrders().subscribe((response: any) => {
    this.consoleorders = response.consoleorders;
  });
}

deleteConsoleOrder(id: number) {
  this.consoleOrdersService.deleteConsoleOrder(id).subscribe((response: any) => {
    this.consoleorders = this.consoleorders.filter((consoleorder: any) => consoleorder.id !== id);
  });
}

}
