import { Component, OnInit } from '@angular/core';
import { PartService} from '../../services/part.service';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private part_service: PartService) { }

  ngOnInit() {
    this.part_service.getAll().subscribe((result)=>{
      debugger;
    });
  }

}
