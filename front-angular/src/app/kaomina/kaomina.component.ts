import { Component, OnInit, ViewChild } from '@angular/core';
import { KaominaService } from '../services/kaomina.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'kaomina',
  templateUrl: './kaomina.component.html',
  styleUrls: ['./kaomina.component.css']
})
export class KaominaComponent implements OnInit {
  kaomina: any;
  columnsToDisplay = ['id', 'id_distrika', 'anarana'];

  constructor(private kaominaService: KaominaService) { }

  @ViewChild(MatPaginator) paginator: any;

  ngOnInit(): void {
    this.kaominaService.getAllKaomina()
      .subscribe(
        (response) => {
          this.kaomina = new MatTableDataSource(response.result);
          this.kaomina.paginator = this.paginator;
        },
        (error) => {
          console.log('Error :', error);
        }
      );
  }

}
