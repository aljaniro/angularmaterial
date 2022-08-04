import { Component, OnInit } from '@angular/core';
import { ClientesService } from '../../services/clientes.service';
import { datas } from '../../interface';
import { data } from 'jquery';
import { Subscription } from 'rxjs';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  palabra:string=''
  suscripcion:Subscription;
  listCliente:datas[]=[]
  displayedColumns: string[] = ['id', 'avatar','first_name', 'last_name', 'email'];
  total:number=0
  registro:number=0
  constructor(private service:ClientesService) {

    this.suscripcion=this.service.get2().subscribe(Response=>{
      this.listCliente = Response.data
      this.total=Response.total
      this.registro=Response.per_page
      console.log(Response.data)})
    console.log(this.listCliente)
  }


  ngOnInit(): void {

this.service.get();
this.service.get2();

console.log(this.service.get2().subscribe(Response=>{
  this.listCliente= Response.data;
  console.log(Response.data)}))
this.resultado();
  }

resultado(){
  this.service.usuarios;
  console.log(this.listCliente)
  console.log(this.suscripcion)
}
onPaginatorChange(even:PageEvent){
  let pagina = even.pageIndex
  let size = even.pageSize
  pagina++;
  this.service.get2(pagina,size).subscribe(datas=>{
    this.listCliente=datas.data
    console.log(this.listCliente)
  })
  console.log(pagina)
  console.log(size)
}
buscar(){
const filtro = this.listCliente.filter(data=> data.first_name == this.palabra  ||  data.last_name == this.palabra)
this.listCliente=filtro
console.log(filtro)
if(this.palabra==''){
  this.suscripcion=this.service.get2().subscribe(Response=>{
    this.listCliente = Response.data
    this.total=Response.total
    this.registro=Response.per_page
    console.log(Response.data)})
}
}
}
