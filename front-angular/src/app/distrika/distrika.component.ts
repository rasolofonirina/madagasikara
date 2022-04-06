import { Component, OnInit } from '@angular/core';
import { DistrikaService } from '../services/distrika.service';

@Component({
  selector: 'distrika',
  templateUrl: './distrika.component.html',
  styleUrls: ['./distrika.component.css']
})
export class DistrikaComponent implements OnInit {
  distrika: any;

  constructor(private distrikaService: DistrikaService) { }

  ngOnInit(): void {
    this.distrikaService.getAllDistrika()
      .subscribe(
        (response) => {
          this.distrika = response.result;
        },
        (error) => {
          console.log('Error :', error);
        }
      );
  }

}
