import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  url: any = environment.ANGULAR_BASE_URL +'/users/'

  get() {
    return this.http.get(this.url + 'fetch')
  }

}
