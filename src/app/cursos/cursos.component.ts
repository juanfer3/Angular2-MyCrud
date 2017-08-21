import { CursosService } from './cursos.service';
import { Component, OnInit, Input } from '@angular/core';



@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  cursos: string[];
  nombre:string='Juan';
  @Input () valor: number= 0;
  constructor(private cursosService: CursosService) {

    //var servicios = new CursosService();
    this.cursos = this.cursosService.getCursos();

  }

  ngOnInit() {
  }

}
