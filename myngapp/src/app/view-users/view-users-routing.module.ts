import {ViewUsersComponent} from "./view-users.component";
import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";


const routes: Routes = [
  {path: 'view/:user_id', component: ViewUsersComponent},
  {path: '', redirectTo: '/search', pathMatch: 'full'}
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewUsersRoutingModule {
}
