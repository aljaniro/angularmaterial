import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Datos } from '../datos/datos.module';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']

})

export class HomeComponent implements OnInit {

  form:FormGroup;
 hor:number=9
 min:number=59
 sec:any=12

  constructor(private fb:FormBuilder) {



    this.form=this.fb.group({
      nombre:['',Validators.required],
      apellido:['',Validators.required],
      telefono:['',Validators.required],
      email:['',Validators.required],
      fecha:['',Validators.required]
    })


  }

  ngOnInit(): void {
   setInterval(()=>{var tiempo = document.getElementsByClassName('titulo')[0]
   var hora:any= new Date().getHours()
   var minutos:any = new Date().getMinutes()
   var seconds:any= new Date().getSeconds()
   if(seconds<10){
   seconds= `0${seconds}`
   }
   if(minutos<10){
     minutos=`0${minutos}`
   }
   if(hora<10){
     hora=`0${hora}`
   }
   tiempo.innerHTML=`${hora}:${minutos}:${seconds}`,1000}
     )
  }
 enviar(){
   const cliente: Datos={
    nombre:this.form.controls['nombre'].value,
    apellido:this.form.controls['apellido'].value,
    telefono:this.form.controls['telefono'].value,
    email:this.form.controls['email'].value,
    fecha:this.form.controls['fecha'].value
   }
   console.log(cliente)
 }

}
