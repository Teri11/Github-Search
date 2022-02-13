
import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { MyserviceService } from '../myservice.service';
import { Repo } from '../repo';
import { Usersearch } from '../usersearch';
import { GitHttpService } from '../git-http.service';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  me!:User;
  myrepo!:Repo;
  myrepos:Repo[]=[]
  User1!:Usersearch;
  myUser1!:User;
  myUserRepos:Repo[]=[]
  constructor(private myService:MyserviceService,private userService:GitHttpService) { }
  
  getuserdetails(search1:any){
  this.User1=search1;
  this.userService.userDetails(this.User1)
  this.myUser1=this.userService.users
  this.myUserRepos=this.userService.reposarray
}
  ngOnInit(): void {
    this.myService.myDetails();
    this.me=this.myService.user
    this.myrepo=this.myService.repo
    this.myrepos=this.myService.repos
    
  }

}
