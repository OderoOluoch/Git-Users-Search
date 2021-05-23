import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {environment} from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }

  getMyUserDetails(){
    return this.http.get(`https://api.github.com/users/OderoOluoch`)
  }
}
