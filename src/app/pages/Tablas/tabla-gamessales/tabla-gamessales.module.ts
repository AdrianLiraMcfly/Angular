import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablaGamessalesComponent } from './tabla-gamessales.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [],
  imports: [CommonModule, 
    RouterModule.forChild([
    { path: '', component: TablaGamessalesComponent }
  ])
]
})
export class TablaGamessalesModule { }
