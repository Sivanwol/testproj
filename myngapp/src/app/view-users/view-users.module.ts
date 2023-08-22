import {ViewUsersComponent} from "./view-users.component";
import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {ViewUsersRoutingModule} from "./view-users-routing.module";
import {ViewUsersStoreModule} from "./store/view-users-store.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    ViewUsersComponent
  ],
  imports: [
    CommonModule,
    ViewUsersStoreModule,
    ViewUsersRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    ViewUsersComponent
  ],
  providers: [],
  bootstrap: []
})
export class ViewUsersModule {}
