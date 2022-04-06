import { Component, OnInit } from '@angular/core';
import { FokontanyService } from '../services/fokontany.service';

@Component({
  selector: 'fokontany',
  templateUrl: './fokontany.component.html',
  styleUrls: ['./fokontany.component.css']
})
export class FokontanyComponent implements OnInit {
  fokontany: any;

  constructor(private fokontanyService: FokontanyService) { }

  ngOnInit(): void {
    this.fokontanyService.getAllFokontany()
      .subscribe(
        (response) => {
          this.fokontany = response.result;
        },
        (error) => {
          console.log('Error :', error);
        }
      );
  }

}
