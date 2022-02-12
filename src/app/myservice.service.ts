
import { Injectable } from '@angular/core';
import { User } from './user';
import axios from 'axios';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {
  user!: User;

  constructor( ) { 
   this.user=new User("","",0,0,0)
  }

  async myDetails(){
    try{const response = await axios.get("https://api.github.com/users/Teri11",{headers:{"Authorization":"environment.token"}})
  //  console.log(response)
    this.user.avatarUrl=response.data.avatar_url;
   this.user.userName=response.data.login
  }catch(error){
    console.log(error)
  }
    
   
  }
}


