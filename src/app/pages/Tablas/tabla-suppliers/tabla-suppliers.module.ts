import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablaSuppliersComponent } from './tabla-suppliers.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [],
  imports: [CommonModule, 
    RouterModule.forChild([
    { path: '', component: TablaSuppliersComponent }
  ])
]
})
export class TablaSuppliersModule { }
