import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/res/data.service';

@Component({
  selector: 'app-search-repos',
  templateUrl: './search-repos.component.html',
  styleUrls: ['./search-repos.component.css']
})
export class SearchReposComponent implements OnInit {

  constructor(private dataService:DataService) { }

  ngOnInit(): void {
  }

  searchRepos(searchTerm:string){
    if(searchTerm !== ''){
      this.dataService.searchForARepo(searchTerm);
   }
  }

}
