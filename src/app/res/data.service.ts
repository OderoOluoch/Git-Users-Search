import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class DataService {
  respos = new BehaviorSubject<any>([])
  constructor(private http: HttpClient) {}

  //My profile End Points
  getMyUserDetails() {
    return this.http.get(`https://api.github.com/users/OderoOluoch`);
  }

  getMyRepos() {
    return this.http.get(`https://api.github.com/users/OderoOluoch/repos`);
  }



  //User End Points 
  users = new BehaviorSubject<any>([])
  getGitUsers() {
    return this.http.get(`https://api.github.com/users`)
      .subscribe((response:any)=>{
        this.users.next(response.data)
      })
    ;
  }

  searchForAUser(userName:string){
    return this.http.get(
      `https://api.github.com/search/users?q=${userName}`
    ).subscribe((response:any)=>{
      this.users.next(response.data)
    });
  }

  getUsers(){
    return this.respos.asObservable()
  }







  //Repo End Points
  getUsersRepos(){
    return this.http.get(
      `https://api.github.com/search/repositories?q={query}`
    ).subscribe((response:any) =>{
      this.respos.next(response.data);
    });
  }

  searchForARepo(repoName:string){
    return this.http.get(
      `https://api.github.com/search/repositories?q={${repoName}}`
    ).subscribe( (response:any) => {
      this.respos.next(response.data)
    });
  }

  getRepos(){
    return this.respos.asObservable();
  };

  

}
