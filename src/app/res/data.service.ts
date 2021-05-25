import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { BehaviorSubject } from 'rxjs';
import { User } from '../class/user';
import { Repository } from '../class/repository';

@Injectable({
  providedIn: 'root',
})

export class DataService {

  userPromise:User;
  myRepoPromise:Repository
  
  constructor(private http: HttpClient) {
    this.userPromise = new User("","","","","","","","")
    this.myRepoPromise = new Repository("", new Date(),"","")
  }

  //Getting user using Using Promise
  userRequest(){
    interface ApiResponse{
      imageUrl:string,
      name:string,
      followers:string,
      publicRepo:string,
      following:string,
      bio:string,
      company:string,
      twitterUserName:string 
    }let promise = new Promise((resolve,reject)=>{
      this.http.get<ApiResponse>(environment.apiUrl).toPromise().then(response=>{
        this.userPromise = response
        resolve(response)
      },
      error => {
        reject(error)
      })
    })
    return promise;
  }

   //Getting my Repo Using Promise
   myRepoRequest(){
    interface ApiResponse{
      imageUrl:string,
      name:string,
      followers:string,
      publicRepo:string,
      following:string,
      bio:string,
      company:string,
      twitterUserName:string 
    }let promise = new Promise((resolve,reject)=>{
      this.http.get<ApiResponse>(environment.apiUrl).toPromise().then(response=>{
        this.userPromise = response
        resolve(response)
      },
      error => {
        reject(error)
      })
    })
    return promise;
  }









  //My profile End Points
  getMyUserDetails() {
    return this.http.get(environment.apiUrl);
  }

  getMyRepos() {
    return this.http.get(`https://api.github.com/users/OderoOluoch/repos`);
  }



  //User End Points 
  users = new BehaviorSubject<any>([])
  getGitUsers() {
    return this.http.get(`https://api.github.com/users`)
      .subscribe((response:any)=>{
        this.users.next(response)
      })
    ;
  }

  searchForAUser(userName:string){
    return this.http.get(
      `https://api.github.com/search/users?q=${userName}`
    ).subscribe((response:any)=>{
      this.users.next(response.items)
    });
  }

  getUsers(){
    return this.users.asObservable()
  }







  //Repo End Points
  respos = new BehaviorSubject<any>([])
  getUsersRepos(){
    return this.http.get(
      `https://api.github.com/search/repositories?q={query}`
    ).subscribe((response:any) =>{
      this.respos.next(response.items);
    });
  }

  searchForARepo(repoName:string){
    return this.http.get(
      `https://api.github.com/search/repositories?q={${repoName}}`
    ).subscribe( (response:any) => {
      this.respos.next(response.items)
    });
  }

  getRepos(){
    return this.respos.asObservable();
  };

  

}
