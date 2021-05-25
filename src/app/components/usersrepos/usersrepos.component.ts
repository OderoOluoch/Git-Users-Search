import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/res/data.service';

@Component({
  selector: 'app-usersrepos',
  templateUrl: './usersrepos.component.html',
  styleUrls: ['./usersrepos.component.css']
})
export class UsersreposComponent implements OnInit {

  public isShowingMessage: boolean;
 

  repos:any = []


  constructor(private dataService:DataService) {
    this.isShowingMessage = false;
   }

   public hideMessage() : void {
 
		this.isShowingMessage = false;
 
	}
  public ngDoCheck() : void {
 
		console.log( "ngDoCheck() - Change detection triggered." );
 
	}
  public showMessage() {
 
		this.isShowingMessage = true;
 
	}


  ngOnInit(): void {
    this.dataService.getUsersRepos();
    this.dataService.getRepos()
      .subscribe((response: any)=>{
        this.repos = response
        console.log("Hapa TS",response)
      })
  }

}
