import { Component, OnInit } from '@angular/core';
import { FaritanyService } from '../services/faritany.service';

@Component({
  selector: 'app-faritany',
  templateUrl: './faritany.component.html',
  styleUrls: ['./faritany.component.css']
})
export class FaritanyComponent implements OnInit {
  faritany: any;

  constructor(private faritanyService: FaritanyService) { }

  ngOnInit(): void {
    this.faritanyService.getAllFaritany()
      .subscribe(
        (response) => {
          this.faritany = response.result;
        },
        (error) => {
          console.log('Error :', error);
        }
      );
  }

}
