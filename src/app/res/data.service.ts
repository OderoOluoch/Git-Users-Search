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

  getMyUserDetails() {
    return this.http.get(`https://api.github.com/users/OderoOluoch`);
  }

  getMyRepos() {
    return this.http.get(`https://api.github.com/users/OderoOluoch/repos`);
  }

  getGitUsers() {
    return this.http.get(`https://api.github.com/users`);
  }

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
  }

  searchForAUser(userName:string){
    return this.http.get(
      `https://api.github.com/search/users?q=${userName}`
    );
  }

}
