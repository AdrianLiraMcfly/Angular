import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { CategoriesService } from '../../../../Core/services/categories.service';
import { Category } from '../../../../Core/Interfaces/categories.interface';
import { CategoryRegis } from '../../../../Core/Interfaces/categoryRegis';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form-categorias',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './form-categorias.component.html',
  styleUrl: './form-categorias.component.css'
})
export class FormCategoriasComponent {
@Input() categories: Category[] = [];
@Input() category!: Category;

  constructor(private categoriesService: CategoriesService, private router:Router, private routers:ActivatedRoute) {}

  public id = this.routers.snapshot.paramMap.get('id');
  ngOnInit() {
    if (this.id) {
      this.categoriesService.getCategory(Number(this.id)).subscribe((response: any) => {
        this.category = response.category;
        this.categoryForm.patchValue({
          name: this.category.name,
        });
      });
    }
  }

  category1: CategoryRegis = {name: ''};

  categoryForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
  });

  get name() { return this.categoryForm.get('name'); }

  onSubmit() {
    if (this.id) {
      this.categoriesService.updateCategory(this.category1, Number(this.id)).subscribe((response: any) => {
        this.router.navigate(['/tablaCategorias']);
      });
    } else {
      this.categoriesService.createCategory(this.category1).subscribe((response: any) => {
        this.router.navigate(['/tablaCategorias']);
      });
    }
  }
}
