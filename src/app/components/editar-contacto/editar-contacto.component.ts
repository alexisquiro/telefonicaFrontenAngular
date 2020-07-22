import { Component, OnInit, Input } from '@angular/core';
import { Contacto } from 'src/app/model/Contacto';
import { CrudcontactosService } from 'src/app/service/crudcontactos.service';

@Component({
  selector: 'app-editar-contacto',
  templateUrl: './editar-contacto.component.html',
  styleUrls: ['./editar-contacto.component.css']
})
export class EditarContactoComponent implements OnInit {
  
  @Input() Contacto:Contacto={};
  
  
  constructor(private contactoService:CrudcontactosService) { }

  ngOnInit() {
  }

  edit(){
    this.contactoService.editContacto(this.Contacto).subscribe(
      
      res=>{
        alert("ok")
      },
      err=>{
           alert("error")
      }

   )


  }
}
