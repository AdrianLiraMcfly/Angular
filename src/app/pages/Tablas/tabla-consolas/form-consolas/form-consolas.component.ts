import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
import { ConsolesService } from '../../../../Core/services/consoles.service';
import { Console } from '../../../../Core/Interfaces/console.interface';
import { ConsoleRegistro } from '../../../../Core/Interfaces/consoleRegis';
import { SuppliersService } from '../../../../Core/services/suppliers.service';
import { Supplier } from '../../../../Core/Interfaces/suppliers.interfaces';
import { ConsoleInventory } from '../../../../Core/Interfaces/ConsoleShow.interface';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-form-consolas',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './form-consolas.component.html',
  styleUrl: './form-consolas.component.css'
})
export class FormConsolasComponent {
  @Input() consoles!: Console;
  @Input() supplier: Supplier[]=[];
  @Input() suppliers: Supplier[] = [];
  @Input() console_inventory!: ConsoleInventory;

  constructor(private consolesService: ConsolesService,private supplierService: SuppliersService, private router:Router, private routers:ActivatedRoute ) { }
  public id = this.routers.snapshot.paramMap.get('id');

  ngOnInit() {
    this.supplierService.getSuppliers().subscribe((response: any) => {
      this.suppliers = response.suppliers;
    });

    if (this.id) {
      this.consolesService.getConsole(Number(this.id)).subscribe((response: any) => {
        this.consoles = response.console;
        this.supplier = response.console.suppliers;
        this.consolaForm.patchValue({
          name: this.consoles.name,
          maker: this.consoles.maker,
          supplier_id: String(this.supplier[0].id),
          stock:String(this.consoles.console_inventory.stock),
          price: String(this.consoles.console_inventory.price)
        });
      });
    }
  }

  consola: ConsoleRegistro = {name: '', maker: '', supplier_id: 0, price:0, stock: 0};


  consolaForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    maker: new FormControl('', [Validators.required]),
    supplier_id: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required]),
    stock: new FormControl('', [Validators.required]),
  });

  get name() {
    return this.consolaForm.get('name');
  }

  get maker() {
    return this.consolaForm.get('maker');
  }

  get supplier_id() {
    return this.consolaForm.get('supplier_id');
  }

  get stock() {
    return this.consolaForm.get('stock');
  }

  get price() {
    return this.consolaForm.get('price');
  }

  onSubmit() {
    if (this.id) {
      this.consolesService.updateConsole(this.consola, Number(this.id)).subscribe((response: any) => {
        this.router.navigate(['/tablaConsolas']);
      });
    } else {
      this.consolesService.createConsole(this.consola).subscribe((response: any) => {
        this.router.navigate(['/tablaConsolas']);
      });
    }
  }
}
