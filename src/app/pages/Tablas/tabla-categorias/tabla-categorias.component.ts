import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesService } from '../../../Core/services/categories.service';

@Component({
  selector: 'app-tabla-categorias',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tabla-categorias.component.html',
  styleUrl: './tabla-categorias.component.css'
})
export class TablaCategoriasComponent {
@Input() categories: any[] = [];

constructor(private categoriesService: CategoriesService) { }

ngOnInit() {
  this.categoriesService.getCategories().subscribe((response: any) => {
    this.categories = response.categories;
  });

}
deleteCategory(id: number) {
  this.categoriesService.deleteCategory(id).subscribe((response: any) => {
    this.categories = this.categories.filter((category: any) => category.id !== id);
  });
}
}
