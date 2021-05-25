import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DataService } from 'src/app/res/data.service';

@Component({
  selector: 'app-search-users',
  templateUrl: './search-users.component.html',
  styleUrls: ['./search-users.component.css']
})
export class SearchUsersComponent implements OnInit {

  @ViewChild ('repo') input:ElementRef;

  constructor(private dataService:DataService) { }

  ngOnInit(): void {
  }

  searchUser(searchTerm:string){
    this.input.nativeElement.value = '';
    if(searchTerm !== ''){
       this.dataService.searchForAUser(searchTerm);
    }
  }

}
