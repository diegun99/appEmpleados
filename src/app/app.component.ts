import { Component } from '@angular/core';
import { Empleado } from './models/empleado.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Listado de empleados';

  empleados:Empleado[] =[
    new Empleado("Diego","Corzo","presidente",3000000),
    new Empleado("Juan","lala","ejecutivo",400000),
    new Empleado("Carlos","Cor","licenciado",650000),
    new Empleado("Cesar","martin","aprendiz",2000),
  ];

  cuadroNombre: string = "";
  cuadroApellido: string = "";
  cuadroCargo: string = "";
  cuadroSalario: number = 0;

  agregarEmpleado(){
    let miEmpleado = new Empleado(
      this.cuadroNombre,
      this.cuadroApellido,
      this.cuadroCargo,
      this.cuadroSalario
    );
    this.empleados.push(miEmpleado);
  }
}
