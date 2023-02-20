import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/servicios/crud.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  registros:any;

  constructor(  private crudServicio:CrudService, private ruta:Router ) {

    this.crudServicio.ListarEmpleado().subscribe(respuesta=>{
        this.registros=respuesta;
    });

   }

  ngOnInit(): void {
  }


  capturarArchivo(event:any):any {
    const archivo = event.target.files[0]['name'];
    alert( archivo ) ;
    //console.log(event.target.files);
  }

  borrarRegistro( id: any, icontrol: any ) {
  
    this.crudServicio.BorrarEmpleado( id ).subscribe(
      respuesta=>{
       // this.ruta.navigateByUrl('/listar');
        this.registros.splice( icontrol, 1);
      }
    );

  }

}




