
import { Injectable } from '@angular/core';
import { User } from './user';
import axios from 'axios';
import { environment } from 'src/environments/environment';
import { Repo } from './repo';
@Injectable({
  providedIn: 'root'
})
export class MyserviceService {
  user!: User;
  repo!:Repo;
  repos:Repo[]=[]

  constructor( ) { 
   this.user=new User("","","","",0,0,0)
   this.repo=new Repo("","","","",0)
  }

  async myDetails(){
    try{
      
   const response = await axios.get("https://api.github.com/users/Teri11")
   const myrepos= await axios.get("https://api.github.com/users/Teri11/repos")

   const allRepos=myrepos.data;
   for(let items of allRepos){
     if(!items.description){
       items.description="No Description"
     }
     this.repos.push(new Repo(items.name,items.description,items.html_url,items.language,items.created_at))
   }


    console.log(response)
    console.log(this.repos)
    console.log(this.user)
    this.user.name=response.data.name;
    this.user.avatarUrl=response.data.avatar_url,
    this.user.userName=response.data.login,
     this.user.location=response.data.location,
     this.user.followers=response.data.followers,
    this.user.following=response.data.following

   
  }catch(error){
    console.log(error)
   }
    
   
  }
}


