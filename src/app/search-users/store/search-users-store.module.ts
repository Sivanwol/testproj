import {CommonServicesModule} from "../../Services/services.module";
import {NgModule} from "@angular/core";
import {StoreModule} from "@ngrx/store";
import {EffectsModule} from "@ngrx/effects";
import {SearchUsersEffect} from "./search-users.effect";
import * as searchUsersReducer from "./search-users.reducer";

@NgModule({
  declarations: [],
  imports: [
    CommonServicesModule,
    StoreModule.forFeature(searchUsersReducer.componentFeatureKey, searchUsersReducer.reducer),
    EffectsModule.forFeature([SearchUsersEffect])
  ],
  providers: [],
  bootstrap: []
})
export class SearchUsersStoreModule {
}
