import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablaConsolessalesComponent } from './tabla-consolessales.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [],
  imports: [CommonModule, 
    RouterModule.forChild([
    { path: '', component: TablaConsolessalesComponent }
  ])
]
})
export class TablaConsolessalesModule { }
