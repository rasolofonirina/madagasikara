import { Component, OnInit, ViewChild } from '@angular/core';
import { FokontanyService } from '../services/fokontany.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'fokontany',
  templateUrl: './fokontany.component.html',
  styleUrls: ['./fokontany.component.css']
})
export class FokontanyComponent implements OnInit {
  fokontany: any;
  columnsToDisplay = ['id', 'anarana', 'kaomina'];

  constructor(private fokontanyService: FokontanyService) { }

  @ViewChild(MatPaginator) paginator: any;

  ngOnInit(): void {
    this.fokontanyService.getAllFokontany()
      .subscribe(
        (response) => {
          this.fokontany = new MatTableDataSource(response.result);
          this.fokontany.paginator = this.paginator;
        },
        (error) => {
          console.log('Error :', error);
        }
      );
  }

}
