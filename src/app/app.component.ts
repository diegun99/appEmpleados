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
}
