import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable } from 'rxjs';
import {registro } from './registro';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  API: string ='https://tugestionadministrativa.com/aulascursosya/rest-ci3/index.php/crud/insertar';

  APIC: string ='https://tugestionadministrativa.com/aulascursosya/rest-ci3/index.php/crud/consultar';
  APIM: string ='https://tugestionadministrativa.com/aulascursosya/rest-ci3/index.php/crud/modificar';

  APIE: string = 'https://tugestionadministrativa.com/aulascursosya/rest-ci3/index.php/crud/borrar';
  APIL: string = 'https://tugestionadministrativa.com/aulascursosya/rest-ci3/index.php/crud/index';

  constructor( private clienteHTTP:HttpClient) { }

  ListarEmpleado():Observable<any> {
    return this.clienteHTTP.get(this.APIL);
  }

  AgregarEmpleado( datosRegistro:registro):Observable<any> {
    return this.clienteHTTP.post(this.API,datosRegistro);
  }

  BorrarEmpleado( id:any ):Observable<any> {
       return this.clienteHTTP.get( this.APIE + "/" + id );
  }

  MostrarEmpleado( id:any ):Observable<any> {
       return this.clienteHTTP.get( this.APIC + "/" + id );
  }

  ModificarEmpleado( id:any, datosRegistro:registro):Observable<any> {
    return this.clienteHTTP.post(this.APIM + "/" + id,datosRegistro);
  }
  
}

