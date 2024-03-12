import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuppliersService } from '../../../Core/services/suppliers.service';

@Component({
  selector: 'app-tabla-suppliers',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tabla-suppliers.component.html',
  styleUrl: './tabla-suppliers.component.css'
})
export class TablaSuppliersComponent {
@Input() suppliers: any[] = [];

constructor(private suppliersService: SuppliersService) { }

ngOnInit() {
  this.suppliersService.getSuppliers().subscribe((response: any) => {
    this.suppliers = response.suppliers;
  });
}

deleteSupplier(id: number) {
  this.suppliersService.deleteSupplier(id).subscribe((response: any) => {
    this.suppliers = this.suppliers.filter((supplier: any) => supplier.id !== id);
  });
}
}
