import { Component, OnInit } from '@angular/core';

import {Persona} from './../persona'

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})  
  
export class PersonaComponent implements OnInit {

  accion :string = 'insertar'
  posicion: any = null
  
  listaPersonas : Array<Persona> = []
  
  persona: Persona = {
    nombre: '',
    apellidos: '',
    edad: 0,
    dni: '',
    fechaNacimiento: new Date(),
    color: '',
    sexo: ''
  }

  constructor() { }

  ngOnInit(): void {
  }

  registrarPersona(): void {
    if (this.accion === 'insertar') {
   
      this.listaPersonas.push(this.persona)
     
    } else {
      this.listaPersonas[this.posicion] = this.persona
    }
    this.persona = {
      nombre: '',
      apellidos: '',
      edad: 0,
      dni: '',
      fechaNacimiento: new Date,
      color: '',
      sexo: ''
    }
  }
  
  modificar(modificar: number): void {
    this.persona = this.listaPersonas[modificar]
    this.accion = 'modificar'
    this.posicion = modificar
  }
  eliminar(eliminar: number): void {
    this.listaPersonas.splice(eliminar)
  }
}
