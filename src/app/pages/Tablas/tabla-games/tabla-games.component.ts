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
  isActive = false;

  constructor(private gamesService: GamesService,private formBuilder: FormBuilder, private router:Router) { }
  gameForm: FormGroup = this.formBuilder.group({
    name: [''],
    maker: [''],
    category: ['']
  });
  get name() { return this.gameForm.get('name'); }
  get maker() { return this.gameForm.get('maker'); }
  get category() { return this.gameForm.get('category'); }



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

  crearJuego(){
    this.router.navigate(['/formJuego']);
  }
  
  }
