import {SearchUsersComponent} from "./search-users.component";
import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";

const routes: Routes = [
  {   path: 'search',   component: SearchUsersComponent   },
  // {   path: 'view',   component: RightsComponent   },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchUsersRoutingModule { }
