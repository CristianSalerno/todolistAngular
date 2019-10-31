
export class Tarea {
    tarea: string;
    prioridad: string;
    completa: boolean;

    constructor(pTarea, pPrioridad) {
        this.tarea = pTarea;
        this.prioridad = pPrioridad;
        this.completa = false;
    }
}

