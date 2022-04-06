import { Component, OnInit, ViewChild } from '@angular/core';
import { DistrikaService } from '../services/distrika.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'distrika',
  templateUrl: './distrika.component.html',
  styleUrls: ['./distrika.component.css']
})
export class DistrikaComponent implements OnInit {
  distrika: any;
  columnsToDisplay = ['id', 'id_faritra', 'anarana'];

  constructor(private distrikaService: DistrikaService) { }

  @ViewChild(MatPaginator) paginator: any;

  ngOnInit(): void {
    this.distrikaService.getAllDistrika()
      .subscribe(
        (response) => {
          this.distrika = new MatTableDataSource(response.result);
          this.distrika.paginator = this.paginator;
        },
        (error) => {
          console.log('Error :', error);
        }
      );
  }

}
