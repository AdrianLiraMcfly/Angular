import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablaConsolasComponent } from './tabla-consolas.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [],
  imports: [CommonModule, 
    RouterModule.forChild([
    { path: '', component: TablaConsolasComponent }
  ])
]
})
export class TablaConsolasModule { }
