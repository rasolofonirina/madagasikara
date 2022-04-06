import { Component, OnInit } from '@angular/core';
import { FaritraService } from '../services/faritra.service';

@Component({
  selector: 'app-faritra',
  templateUrl: './faritra.component.html',
  styleUrls: ['./faritra.component.css']
})
export class FaritraComponent implements OnInit {
  faritra: any;

  constructor(private faritraService: FaritraService) { }

  ngOnInit(): void {
    this.faritraService.getAllFaritra()
      .subscribe(
        (response) => {
          this.faritra = response.result;
        },
        (error) => {
          console.log('Error :', error);
        }
      );
  }

}
