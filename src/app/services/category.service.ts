import { Injectable } from '@angular/core';
import { Api } from '../providers/api/api';
import { Observable } from 'rxjs';
import { Category } from '../Models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private api: Api) { }

  create(cat:Category) {
   
    return this.api.post("category", cat);
  }

  getAll() {
    return this.api.get("part");
  }
}
