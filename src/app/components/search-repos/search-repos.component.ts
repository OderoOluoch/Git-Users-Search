import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DataService } from 'src/app/res/data.service';

@Component({
  selector: 'app-search-repos',
  templateUrl: './search-repos.component.html',
  styleUrls: ['./search-repos.component.css']
})
export class SearchReposComponent implements OnInit {

  constructor(private dataService:DataService) { }

  @ViewChild ('repo') input:ElementRef

  ngOnInit(): void {
  }

  searchRepos(searchTerm:string){
    this.input.nativeElement.value = '';
    if(searchTerm !== ''){
      this.dataService.searchForARepo(searchTerm);
   }
  }

}
