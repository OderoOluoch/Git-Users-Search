import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/res/data.service';

@Component({
  selector: 'app-usersrepos',
  templateUrl: './usersrepos.component.html',
  styleUrls: ['./usersrepos.component.css']
})
export class UsersreposComponent implements OnInit {

  repos:any = []

  repoSearchResult=[]

  constructor(private dataService:DataService) { }

  search(searchTerm:string){
    if(searchTerm !== ''){
       this.dataService.searchForARepo(searchTerm)
        .subscribe((response:any)=>{
        this.repoSearchResult= response;
        console.log("Fetched Repo search result", this.repoSearchResult)
       })       
    }
  }

  ngOnInit(): void {
    this.dataService.getRepos()
    .subscribe((response: any) => {
      this.repos = response.items
    })
  }

}