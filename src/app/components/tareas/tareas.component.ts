import { Component, OnInit } from '@angular/core';
import { Tarea } from '../../models/Tarea';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent implements OnInit {
  listTareas: Tarea[] = [];
  nombreTarea = '';
  constructor() { }

  ngOnInit(): void {
  }
  agregarTarea() {
    // Crear un objeto tarea
    const tarea: Tarea = {
      nombre: this.nombreTarea,
      estado: false
    }

    // Agregar el objeto al Array;
    this.listTareas.push(tarea);

    // Reset form
    this.nombreTarea = '';

  }
  eliminarTarea(index: number): void {
    console.log(index);
    this.listTareas.splice(index, 1);
  }

  actualizarTarea(index: number, tarea: Tarea): void {
    this.listTareas[index].estado = !tarea.estado;
  }
}
