import { Injectable } from '@angular/core';
import { User } from './user';
import axios from 'axios';
import { environment } from 'src/environments/environment';
import { Repo } from './repo';
import { Usersearch } from './usersearch';

@Injectable({
  providedIn: 'root'
})
export class GitHttpService {
  users!: User;
  repos!:Repo;
  reposarray:Repo[]=[]
  useridentity!:Usersearch;

  constructor( ) { 
    this.users=new User("","","","",0,0,0)
    this.repos=new Repo("","","","",0)
    this.useridentity=new Usersearch("")
   }

   async userDetails(search:any){
    try{
      const userresponse = await axios.get(`https://api.github.com/users/${search.identity}`,{headers:{"Authorization":environment.token}})
   const userrepos= await axios.get(`https://api.github.com/users/${search.identity}/repos`)

   const alluserRepos=userrepos.data;
   for(let items of alluserRepos){
     if(!items.description){
       items.description="No Description"
     }
     this.reposarray.push(new Repo(items.name,items.description,items.html_url,items.language,items.created_at))
   }


    console.log(userresponse)
    console.log(this.repos)
    console.log(this.users)
    this.users.name=userresponse.data.name;
    this.users.avatarUrl=userresponse.data.avatar_url,
    this.users.userName=userresponse.data.login,
     this.users.location=userresponse.data.location,
     this.users.followers=userresponse.data.followers,
    this.users.following=userresponse.data.following

   
  }catch(error){
    console.log(error)
   }
    
   
  }
}
