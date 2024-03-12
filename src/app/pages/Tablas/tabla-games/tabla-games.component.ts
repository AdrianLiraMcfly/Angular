import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GamesService } from '../../../Core/services/games.service';
import { Game } from '../../../Core/Interfaces/games.interfaces';
import { FormBuilder, FormGroup, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ModalComponent } from '../../../components/modal/modal.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabla-games',
  standalone: true,
  imports: [CommonModule, ModalComponent, ReactiveFormsModule, FormsModule],
  templateUrl: './tabla-games.component.html',
  styleUrls: ['./tabla-games.component.css']
})
export class TablaGamesComponent{
  @Input() games: Game[] = [];

  constructor(private gamesService: GamesService,private formBuilder: FormBuilder, private router:Router) { }



  ngOnInit() {
    this.gamesService.getGames().subscribe((response: any) => {
      this.games = response.games;
    });
}
  deleteGame(id: number) {
  this.gamesService.delateGame(id).subscribe((response: any) => {
    this.games = this.games.filter((game: Game) => game.id !== id);
  });
}
editarJuego(id: number) {
    this.router.navigate(['/GamesForm', id]);
}

  crearJuego(){
    this.router.navigate(['/GamesForm']);
  }
  
  }
