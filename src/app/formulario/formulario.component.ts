import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Tarea } from '../models/tarea.model';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  @Output() tareaRegistrada: EventEmitter<Tarea>;

  tareas: Tarea;

  constructor() {
    this.tareas = new Tarea('', '');
    this.tareaRegistrada = new EventEmitter();
  }

  ngOnInit() {

  }

  agregarTarea() {

    this.tareaRegistrada.emit(this.tareas);
    console.log(this.tareaRegistrada);

  }



}
