import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../../services/category.service';
import {Category} from '../../../models/category';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {

  category: Category={category_name:""}

  constructor(private cat_service: CategoryService) { }

  saveCategory() {
    this.cat_service.create(this.category).subscribe((result)=>{
    debugger;
    });
  }
  ngOnInit() {
  }

}
