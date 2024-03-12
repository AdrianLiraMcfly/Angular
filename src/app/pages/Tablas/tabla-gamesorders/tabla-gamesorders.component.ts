import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GamesOrdersService } from '../../../Core/services/games.orders.service';

@Component({
  selector: 'app-tabla-gamesorders',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tabla-gamesorders.component.html',
  styleUrl: './tabla-gamesorders.component.css'
})
export class TablaGamesordersComponent {
@Input() gamesorders: any[] = [];

constructor(private gamesOrdersService: GamesOrdersService) { }

ngOnInit() {
  this.gamesOrdersService.getGamesOrders().subscribe((response: any) => {
    this.gamesorders = response.gamesorders;
  });
}

deleteGameOrder(id: number) {
  this.gamesOrdersService.deleteGameOrder(id).subscribe((response: any) => {
    this.gamesorders = this.gamesorders.filter((gameorder: any) => gameorder.id !== id);
  });

}
}
