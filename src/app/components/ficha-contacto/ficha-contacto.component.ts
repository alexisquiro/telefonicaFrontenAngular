import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Contacto } from 'src/app/model/Contacto';
import { CrudcontactosService } from 'src/app/service/crudcontactos.service';

@Component({
  selector: 'app-ficha-contacto',
  templateUrl: './ficha-contacto.component.html',
  styleUrls: ['./ficha-contacto.component.css']
})
export class FichaContactoComponent implements OnInit {
  
  
  @Input() Contacto:Contacto;
  @Input() Cont:number;
  
 // @Output() contacto:EventEmitter<String> =new EventEmitter();


  constructor(private contactoService:CrudcontactosService) { }

  ngOnInit() {
  }



  delete(){
     



  }
}
