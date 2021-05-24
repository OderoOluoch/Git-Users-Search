import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class DataService {
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

  getRepos() {
    return this.http.get(
      `https://api.github.com/search/repositories?q={query}`
    );
  }

  searchForARepo(repoName:string){
    return this.http.get(
      `https://api.github.com/search/repositories?q={${repoName}}`
    );
  }

  searchForAUser(userName:string){
    return this.http.get(
      `https://api.github.com/search/users?q={${userName}}`
    );
  }

}
