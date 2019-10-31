import { Component } from '@angular/core';
import { Tarea } from 'src/app/models/tarea.model'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  arrTareas: Tarea[];


  constructor() {
    this.arrTareas = [];
  }

  manejarTarea($event) {
    this.arrTareas.push({ ...$event });
    console.log(this.arrTareas);
  }

}
