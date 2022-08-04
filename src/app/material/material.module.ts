import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatPaginatorModule} from '@angular/material/paginator';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,MatToolbarModule,MatButtonModule,MatIconModule,MatCardModule,MatTableModule,MatFormFieldModule,MatPaginatorModule
  ],
  exports:[
    MatToolbarModule,MatButtonModule,MatIconModule,MatCardModule,MatTableModule,MatFormFieldModule,MatPaginatorModule
  ],
})
export class MaterialModule { }
