import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-visualizacion-pipes',
  templateUrl: './visualizacion-pipes.component.html',
  styleUrls: ['./visualizacion-pipes.component.scss']
})
export class VisualizacionPipesComponent implements OnInit {

  fecha: object = new Date();
  importe: number = 123314547.1478145;
  moneda: string = ' €';

  constructor() { }

  ngOnInit(): void {
  }

}
