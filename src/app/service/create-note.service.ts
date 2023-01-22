import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CreateNoteService {

  constructor(private http:HttpClient) { }

  url: any = environment.ANGULAR_BASE_URL +'/virtual_meeting/'

  create(value:any) {
    return this.http.post(this.url + 'create',value)
  }

  get() {
    return this.http.get(this.url + 'fetch')
  }

  update(id:any,value:any) {
    return this.http.patch(this.url + 'update/'+id,value)
  }

  delete(id:any) {
    return this.http.delete(this.url + 'delete/'+id)
  }

}

