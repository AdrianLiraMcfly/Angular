import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablaCategoriasComponent } from './tabla-categorias.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [],
  imports: [CommonModule, 
    RouterModule.forChild([
    { path: '', component: TablaCategoriasComponent }
  ])
]
})
export class TablaCategoriasModule { }
