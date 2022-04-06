import { Component, OnInit, ViewChild } from '@angular/core';
import { FaritanyService } from '../services/faritany.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'faritany',
  templateUrl: './faritany.component.html',
  styleUrls: ['./faritany.component.css']
})
export class FaritanyComponent implements OnInit {
  faritany: any;
  columnsToDisplay = ['id', 'anarana'];

  constructor(private faritanyService: FaritanyService) { }

  @ViewChild(MatSort) sort: any;

  ngOnInit(): void {
    this.faritanyService.getAllFaritany()
      .subscribe(
        (response) => {
          this.faritany = new MatTableDataSource(response.result);
          this.faritany.sort = this.sort;
        },
        (error) => {
          console.log('Error :', error);
        }
      );
  }

}
