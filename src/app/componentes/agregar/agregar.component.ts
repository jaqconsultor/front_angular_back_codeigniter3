import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { CrudService } from 'src/app/servicios/crud.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  formularioGrupo: FormGroup;

  constructor(public formulario: FormBuilder, private crudServicio: CrudService, private ruta: Router) {

    this.formularioGrupo = this.formulario.group({
      id: [''],
      nombre: ['']
    });
   

  }

  ngOnInit(): void {
  }

  enviardatos(): void {
    this.crudServicio.AgregarEmpleado(this.formularioGrupo.value).subscribe(resutl => {
      this.ruta.navigateByUrl('/listar');
    });

  }

}
