import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesService } from '../../../Core/services/categories.service';
import { Category } from '../../../Core/Interfaces/categories.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabla-categorias',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tabla-categorias.component.html',
  styleUrl: './tabla-categorias.component.css'
})
export class TablaCategoriasComponent {
@Input() categories: Category[] = [];

constructor(private categoriesService: CategoriesService, private router:Router) { }

ngOnInit() {
  this.categoriesService.getCategories().subscribe((response: any) => {
    this.categories = response.categories;
  });

}

crearCategoria(){
  this.router.navigate(['/CategoriesForm']);
}
editarCategoria(id: number) {
  this.router.navigate(['/CategoriesForm', id]);
}
deleteCategory(id: number) {
  this.categoriesService.deleteCategory(id).subscribe((response: any) => {
    this.categories = this.categories.filter((category: any) => category.id !== id);
  });
}
}
