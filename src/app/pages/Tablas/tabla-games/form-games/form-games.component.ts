import { Component, Input, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
import { GamesService } from '../../../../Core/services/games.service';
import { SuppliersService } from '../../../../Core/services/suppliers.service';
import { CategoriesService } from '../../../../Core/services/categories.service';
import { gameRegist } from '../../../../Core/Interfaces/gameForm.interface';
import { Game } from '../../../../Core/Interfaces/games.interfaces';
import { Supplier } from '../../../../Core/Interfaces/games.interfaces';
import { Category } from '../../../../Core/Interfaces/games.interfaces';
import { GameShow,GameInventory} from '../../../../Core/Interfaces/GameShow.Interface';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-form-games',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './form-games.component.html',
  styleUrl: './form-games.component.css'
})

export class FormGamesComponent {

@Input() games!: Game;
@Input() supplier: Supplier[]=[];
@Input() suppliers: Supplier[] = [];
@Input () categories: Category[] = [];
@Input() game_inventory!:GameInventory;
 constructor(private gamesService: GamesService,private supplierService: SuppliersService, private router:Router, private categoriesService: CategoriesService, private routers:ActivatedRoute ) { }
 public id = this.routers.snapshot.paramMap.get('id');
 ngOnInit() {

  this.supplierService.getSuppliers().subscribe((response: any) => {
    this.suppliers = response.suppliers;
  });

  this.categoriesService.getCategories().subscribe((response: any) => {
    this.categories = response.categories;
  });

  if (this.id) {
    
    this.gamesService.getGame(Number(this.id)).subscribe((response: any) => {
      this.game = response.game;
      this.game_inventory = response.game.game_inventory;
      this.supplier = response.game.suppliers;
      this.gameForm.patchValue({
        name: this.game.name,
        maker: this.game.maker,
        category_id: String(this.game.category_id),
        stock:String(this.game_inventory.stock),
        price: String(this.game_inventory.price),
        supplier_id: String(this.supplier[0].id)

      })
    }
    );
  }
 }

  game: gameRegist = {name: '', maker: '', category_id: 0, stock: 0, price: 0, supplier_id: 0};

  gameForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    maker: new FormControl('', [Validators.required, Validators.minLength(3)]),
    category_id: new FormControl('', [Validators.required]),
    stock: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required]),
    supplier_id: new FormControl('', [Validators.required])
  });

  get name() { return this.gameForm.get('name'); }
  get maker() { return this.gameForm.get('maker'); }
  get category_id() { return this.gameForm.get('category_id'); }
  get stock() { return this.gameForm.get('stock'); }
  get price() { return this.gameForm.get('price'); }
  get supplier_id() { return this.gameForm.get('supplier_id'); }

  onSubmit() {
    if (this.id) {
      this.gamesService.updateGame(this.game, Number(this.id)).subscribe( 
        data => {
        console.log(data);
        this.router.navigate(['/tablaGames']);
      }
      );
    } else {
      this.gamesService.createGame(this.game).subscribe(
        data => {
          console.log(data);
          this.router.navigate(['/tablaGames']);
        }
      );
    }

  }
}
