import { Component, OnInit, ViewChild } from '@angular/core';
import { FaritraService } from '../services/faritra.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'faritra',
  templateUrl: './faritra.component.html',
  styleUrls: ['./faritra.component.css']
})
export class FaritraComponent implements OnInit {
  faritra: any;
  columnsToDisplay = ['id', 'id_faritany', 'anarana'];

  constructor(private faritraService: FaritraService) { }

  @ViewChild(MatPaginator) paginator: any;
  @ViewChild(MatSort) sort: any;

  ngOnInit(): void {
    this.faritraService.getAllFaritra()
      .subscribe(
        (response) => {
          this.faritra = new MatTableDataSource(response.result);
          this.faritra.paginator = this.paginator;
          this.faritra.sort = this.sort;
        },
        (error) => {
          console.log('Error :', error);
        }
      );
  }

}
