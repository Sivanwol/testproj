import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MainMenuModule} from "./Menu/main-menu";
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import {SearchUsersModule} from "./search-users/search-users.module";
import {SearchUsersRoutingModule} from "./search-users/search-users-routing.module";
import {ViewUsersModule} from "./view-users/view-users.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MainMenuModule,
    SearchUsersModule,
    SearchUsersRoutingModule,
    ViewUsersModule,

    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
