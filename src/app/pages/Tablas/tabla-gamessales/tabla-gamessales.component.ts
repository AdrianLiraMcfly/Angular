import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GamesSalesService } from '../../../Core/services/games-sales.service';

@Component({
  selector: 'app-tabla-gamessales',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tabla-gamessales.component.html',
  styleUrl: './tabla-gamessales.component.css'
})
export class TablaGamessalesComponent {
@Input() gamesSales: any[] = [];

constructor(private gamesSalesService: GamesSalesService) { }

ngOnInit() {
  this.gamesSalesService.getGamesSales().subscribe((response: any) => {
    this.gamesSales = response.gamesSales;
  });
}
deleteGameSale(id: number) {
  this.gamesSalesService.deleteGameSale(id).subscribe((response: any) => {
    this.gamesSales = this.gamesSales.filter((gameSale: any) => gameSale.id !== id);
  });
}
}
