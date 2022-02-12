import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  me!:User;


  constructor(private myService:MyserviceService) { }

  ngOnInit(): void {
    this.myService.myDetails();
    this.me=this.myService.user
  }

}
