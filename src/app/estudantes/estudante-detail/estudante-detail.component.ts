import { Estudante } from './../../estudante';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-estudante-detail',
  templateUrl: './estudante-detail.component.html',
  styleUrls: ['./estudante-detail.component.css']
})
export class EstudanteDetailComponent implements OnInit {

  @Input() estudante?: Estudante;

  constructor() { }

  ngOnInit(): void {
  }

}
