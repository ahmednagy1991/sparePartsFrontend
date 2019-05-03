import { Injectable } from '@angular/core';
import { Api } from '../providers/api/api';
import { Observable } from 'rxjs';
import { Part } from '../Models/part';

@Injectable({
  providedIn: 'root'
})
export class PartService {

  constructor(private api: Api) { }

  getAll() {
    return this.api.get("part");
  }
}
