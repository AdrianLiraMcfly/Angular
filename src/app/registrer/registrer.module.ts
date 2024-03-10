import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrerComponent } from './registrer.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [],
  imports: [CommonModule, 
    RouterModule.forChild([
    { path: '', component: RegistrerComponent }
  ])
]
})
export class RegistrerModule { }
