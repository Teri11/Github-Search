
import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { Usersearch } from '../usersearch';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
 
@Output()Userquery=new EventEmitter<any>();
 
query=new Usersearch("")
getUser(){
  this.Userquery.emit(this.query)
  this.query=new Usersearch("")
}
  constructor() { }

  ngOnInit(): void {
  }

}
