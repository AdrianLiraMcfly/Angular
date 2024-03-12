import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablaGamesordersComponent } from './tabla-gamesorders.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [],
  imports: [CommonModule, 
    RouterModule.forChild([
    { path: '', component: TablaGamesordersComponent }
  ])
]
})
export class TablaGamesordersModule { }
