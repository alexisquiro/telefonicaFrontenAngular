import { Injectable } from '@angular/core';
import {HttpClient}from '@angular/common/http';
import { Contacto } from '../model/Contacto';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CrudcontactosService {



  constructor(private http :HttpClient) { }

  getConstactos():Observable<Contacto>{

    return this.http.get('http://localhost:8000/api/contactos');
  }

  createContactos(contacto:Contacto): Observable<Contacto>{
    
    return this.http.post('http://localhost:8000/api/contactos',contacto);
     
  }
  editContacto(contacto:Contacto): Observable<Contacto>{

    return this.http.put('http://localhost:8000/api/contactos',contacto);

  }
 /* deleteContacto(contacto:Contacto): Observable<Contacto>{

    return this.http.delete('http://localhost:8000/api/contactos',contacto);

  }*/


}
