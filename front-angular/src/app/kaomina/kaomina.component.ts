import { Component, OnInit } from '@angular/core';
import { KaominaService } from '../services/kaomina.service';

@Component({
  selector: 'app-kaomina',
  templateUrl: './kaomina.component.html',
  styleUrls: ['./kaomina.component.css']
})
export class KaominaComponent implements OnInit {
  kaomina: any;

  constructor(private kaominaService: KaominaService) { }

  ngOnInit(): void {
    this.kaominaService.getAllKaomina()
      .subscribe(
        (response) => {
          this.kaomina = response.result;
        },
        (error) => {
          console.log('Error :', error);
        }
      );
  }

}
