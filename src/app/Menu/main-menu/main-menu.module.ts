import {NgModule} from "@angular/core";
import { CommonModule } from '@angular/common';
import {MainMenuComponent} from "./main-menu.component";
import {MainMenuItemComponent} from "./main-menu-item/main-menu-item.component";
@NgModule({
  declarations: [
    MainMenuComponent,
    MainMenuItemComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MainMenuComponent
  ],
  providers: [],
  bootstrap: []
})
export class MainMenuModule {
}
