import {ViewUsersComponent} from "./view-users.component";
import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {ViewUsersRoutingModule} from "./view-users-routing.module";

@NgModule({
  declarations: [
    ViewUsersComponent
  ],
  imports: [
    CommonModule,
    ViewUsersRoutingModule
  ],
  exports: [
    ViewUsersComponent
  ],
  providers: [],
  bootstrap: []
})
export class ViewUsersModule {}
