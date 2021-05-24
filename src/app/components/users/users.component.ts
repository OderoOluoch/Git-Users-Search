import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/res/data.service';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users:any = []

  constructor(private dataService:DataService) { }

  ngOnInit(): void {
    this.dataService.getGitUsers()
      .subscribe((response: any) => {
        this.users = response
        console.log(response)
      })
  }

}
