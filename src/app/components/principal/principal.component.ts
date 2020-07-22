import { Component, OnInit } from '@angular/core';
import { Contacto } from 'src/app/model/Contacto';
import { CrudcontactosService } from 'src/app/service/crudcontactos.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {


  contactos:any=[
    {
      "id":"2",
      "nombre":"alexis",
      "numero":"0414"

    }
  ];

  constructor(private contactoService:CrudcontactosService) { }

  ngOnInit() {
     console.log("lalas");
    this.contactoService.getConstactos().subscribe(
      
       res=>{
           this.contactos=res
           
         for (let x of this.contactos)
             console.log(x)//prueba 
       },
       err=>{
            alert("no hay contactos pos los momentos")
       }

    )
  }



}
