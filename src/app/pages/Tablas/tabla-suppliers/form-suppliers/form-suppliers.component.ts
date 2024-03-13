import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
import { SuppliersService } from '../../../../Core/services/suppliers.service';
import { Supplier } from '../../../../Core/Interfaces/suppliers.interfaces';
import { SupplierRegis } from '../../../../Core/Interfaces/supplierRegis';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-form-suppliers',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './form-suppliers.component.html',
  styleUrl: './form-suppliers.component.css'
})
export class FormSuppliersComponent {
@Input() suppliers!: Supplier;
public id = this.routers.snapshot.paramMap.get('id');
constructor(private suppliersService: SuppliersService, private router:Router, private routers:ActivatedRoute ) { }

ngOnInit() {
  if (this.id) {
    this.suppliersService.getSupplier(Number(this.id)).subscribe((response: any) => {
      this.suppliers = response.supplier;
      this.supplierForm.patchValue({
        name: this.suppliers.name,
        email: this.suppliers.email,
        phone: this.suppliers.phone
      })
    }
    );
  }
}

supplier: SupplierRegis = {name: '', email: '', phone: ''};

supplierForm = new FormGroup({
  name: new FormControl('', [Validators.required]),
  email: new FormControl('', [Validators.required]),
  phone: new FormControl('', [Validators.required])
});

get name() { return this.supplierForm.get('name'); }
get email() { return this.supplierForm.get('email'); }
get phone() { return this.supplierForm.get('phone'); }

onSubmit() {
  console.log(this.supplier);
  if (this.id) {
    this.suppliersService.updateSupplier(this.supplier, Number(this.id)).subscribe((response: any) => {
      this.router.navigate(['/tablaSuppliers']);
    });
  } else {
    this.suppliersService.createSupplier(this.supplier).subscribe((response: any) => {
      this.router.navigate(['/tablaSuppliers']);
    });
  }
}
}
