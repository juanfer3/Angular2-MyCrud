import { CursosService } from './cursos.service';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursosComponent } from './cursos.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    CursosComponent
  ],
  exports:[
    CursosComponent
  ],
  providers:[CursosService]
})
export class CursosModule { }
