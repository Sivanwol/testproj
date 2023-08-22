import {NgModule} from "@angular/core";
import { CommonModule } from '@angular/common';
import {SearchUsersComponent} from "./search-users.component";
import {SearchUsersStoreModule} from "./store/search-users-store.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {SearchUserItemComponent} from "./search-user-item/search-user-item.component";
import {SearchUsersRoutingModule} from "./search-users-routing.module";
@NgModule({
  declarations: [
    SearchUserItemComponent,
    SearchUsersComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    SearchUsersStoreModule,
    FormsModule,
    ReactiveFormsModule,
    SearchUsersRoutingModule
  ],
  exports: [
    SearchUsersComponent
  ],
  providers: [],
  bootstrap: []
})
export class SearchUsersModule {
}
