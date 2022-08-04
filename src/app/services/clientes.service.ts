import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { datas, RegRes } from '../interface';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {
url='https://reqres.in/api/users'
usuarios: datas[]=[]

  constructor(private http:HttpClient) {

   }
  get(){
    const params = new HttpParams()
                      .set("page", '1')
                      .set("per_page", '6')
   this.http.get<RegRes>(this.url).subscribe(Response=>{
    this.usuarios= Response.data;
   })
  }

  get2(pagina:number=0,size:number=3):Observable<RegRes>{
    const params = new HttpParams()
    .set("page", pagina.toString())
    .set("per_page", size.toString())
    return this.http.get<RegRes>(this.url,{params:params})
  }
}
