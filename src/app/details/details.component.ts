import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { MyserviceService } from '../myservice.service';
import { Repo } from '../repo';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  me!:User;
  myrepo!:Repo;
  myrepos:Repo[]=[]

  constructor(private myService:MyserviceService) { }

  ngOnInit(): void {
    this.myService.myDetails();
    this.me=this.myService.user
    this.myrepo=this.myService.repo
    this.myrepos=this.myService.repos
    
  }

}
