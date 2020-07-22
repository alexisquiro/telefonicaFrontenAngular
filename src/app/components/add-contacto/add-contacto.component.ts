import { Component, OnInit } from '@angular/core';
import { Contacto } from 'src/app/model/Contacto';
import { CrudcontactosService } from 'src/app/service/crudcontactos.service';

@Component({
  selector: 'app-add-contacto',
  templateUrl: './add-contacto.component.html',
  styleUrls: ['./add-contacto.component.css']
})
export class AddContactoComponent implements OnInit {


  contacto:Contacto={};
  
  constructor(private contactoService:CrudcontactosService) { }

  ngOnInit() {
  }

  create(){
    delete this.contacto.id;
    this.contactoService.createContactos(this.contacto).subscribe(res=>{

      console.log("ok")
   },err=>{
       console.log("no ok")
   }
       
    )
    
  }
}
