import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './search/search.component';
// import { DetailsComponent } from './details/details.component';
// import { GitRequest } from './git-http/git-request.service';
const routes: Routes = [
  {path:'headers',component:HeaderComponent},
  {path:'search',component:SearchComponent},
//   {path:'details',component:DetailsComponent},
//   {path:'git-request',component:GitRequest}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
