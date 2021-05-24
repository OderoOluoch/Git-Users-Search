import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/res/data.service';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users:any = []
  userSearchResult ={}

  constructor(private dataService:DataService) { }


  search(searchTerm:string){
    if(searchTerm !== ''){
       this.dataService.searchForAUser(searchTerm)
        .subscribe((response:any)=>{
        this.userSearchResult = response;
        console.log("Logging from User form",response)
       })       
    }
  }

  ngOnInit(): void {
    this.dataService.getGitUsers()
      .subscribe((response: any) => {
        this.users = response
      })
  }

}
