import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/res/data.service';

@Component({
  selector: 'app-search-users',
  templateUrl: './search-users.component.html',
  styleUrls: ['./search-users.component.css']
})
export class SearchUsersComponent implements OnInit {

  constructor(private dataService:DataService) { }

  ngOnInit(): void {
  }

  search(searchTerm:string){
    if(searchTerm !== ''){
       this.dataService.searchForAUser(searchTerm);
    }
  }

}
