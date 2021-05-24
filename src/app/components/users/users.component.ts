import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/res/data.service';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit, OnDestroy {

  users:any = [];
  subscription: Subscription;
  

  constructor(private dataService:DataService) { }

  ngOnInit(): void {
    this.dataService.getGitUsers();
    this.subscription = this.dataService.getUsers()
      .subscribe((response:any) =>{
        this.users = response;
        console.log(this.users)
      })   
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
