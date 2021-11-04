import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Empleado } from './Empleado';
@Injectable({
  providedIn: 'root'
})
export class CrudService {
API : string = 'http://localhost:8080/git/';
  constructor(private clienteHttp: HttpClient) { }

  AgregarEmpleado(datosEmpleado:Empleado): Observable<any>{
    return this.clienteHttp.post(this.API+"?insertar=1",datosEmpleado)
  }
  MostrarEmpleados(){
    return this.clienteHttp.get(this.API);
  }
  BorrarEmpleados(id :any){
    return this.clienteHttp.get(this.API+"?borrar="+id)
  }
  ObtenerEmpleado(id : any){
    return this.clienteHttp.get(this.API+"?consultar="+id)
  }
}
