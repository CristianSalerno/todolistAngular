import { Component, OnInit, Input } from '@angular/core';
import { Tarea } from '../models/tarea.model';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  @Input() arrTareas: Tarea[];

  constructor() {


  }

  ngOnInit() {
    console.log(this.arrTareas)
  }


  borrarTarea(tarea) {
    let position = this.arrTareas.indexOf(tarea)
    this.arrTareas.splice(position, 1);
  }

}
