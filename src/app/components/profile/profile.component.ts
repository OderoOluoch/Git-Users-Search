import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/res/data.service';
import {User} from '../../class/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profile:any={}

  constructor(private dataService:DataService) { }

  ngOnInit(): void {
    this.dataService.userRequest()
    this.profile = this.dataService.userPromise

    this.dataService.getMyUserDetails()
      .subscribe((response: any) => {
        this.profile = response
      })
  }

}
