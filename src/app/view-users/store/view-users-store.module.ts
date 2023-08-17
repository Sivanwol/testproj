import {CommonServicesModule} from "../../Services/services.module";
import {NgModule} from "@angular/core";
import {StoreModule} from "@ngrx/store";
import {EffectsModule} from "@ngrx/effects";
import * as reducer from "./view-users.reducer";
import {ViewUsersEffect} from "./view-users.effect";

@NgModule({
  declarations: [],
  imports: [
    CommonServicesModule,
    StoreModule.forFeature(reducer.componentFeatureKey, reducer.reducer),
    EffectsModule.forFeature([ViewUsersEffect])
  ],
  providers: [],
  bootstrap: []
})
export class ViewUsersStoreModule {
}
