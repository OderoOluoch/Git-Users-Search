import { Component, OnInit } from '@angular/core';
import {DataService} from '../../res/data.service'

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css']
})
export class ReposComponent implements OnInit {

  repos:any = []

  constructor(private dataService:DataService) { }

  ngOnInit(): void {
    this.dataService.getMyRepos()
      .subscribe((response: any) => {
        this.repos = response

        console.log("Repos", this.repos)
      })
  }
  

}



