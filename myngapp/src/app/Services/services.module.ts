import {NgModule} from "@angular/core";
import {LocalStorageManagerService} from "./LocalStorageManagerService";
import {APIService} from "./API.service";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {AuthInterceptor} from "../interceptors/auth-interceptor";


@NgModule({
  declarations: [],
  imports: [
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
    APIService,
    LocalStorageManagerService
  ],
  bootstrap: []
})
export class CommonServicesModule { }
