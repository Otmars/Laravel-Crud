import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder } from '@angular/forms';
import { CrudService } from 'src/app/servicio/crud.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-agregar-empleado',
  templateUrl: './agregar-empleado.component.html',
  styleUrls: ['./agregar-empleado.component.scss']
})
export class AgregarEmpleadoComponent implements OnInit {
  formularioDeEmpleados:FormGroup;


  constructor(public formulario:FormBuilder, private crudService : CrudService,private router:Router) {

    this.formularioDeEmpleados=this.formulario.group({
      nombre:[''],
      correo:['']
    });
   }

  ngOnInit(): void {
  }
  enviarDatos():any{
      console.log("Me apretaste");
      console.log(this.formularioDeEmpleados.value);
      this.crudService.AgregarEmpleado(this.formularioDeEmpleados.value).subscribe();
      this.router.navigateByUrl('/listar-empleado');
  }

}
