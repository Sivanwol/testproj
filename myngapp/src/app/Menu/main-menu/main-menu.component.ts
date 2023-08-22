import {Component, OnInit} from '@angular/core';
import {MainMenuItem} from "../../Dta";

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent implements OnInit{
  public menuItems: MainMenuItem[] = [];
  ngOnInit(): void {
    this.menuItems = [
      new MainMenuItem('Home', 'pi pi-fw pi-home', '/home'),
      new MainMenuItem('Item 1', 'pi pi-fw pi-calendar', 'https://www.google.com', true),
      new MainMenuItem('Item 2', 'pi pi-fw pi-pencil', 'https://www.google.com', true),
      new MainMenuItem('Item 3', 'pi pi-fw pi-pencil', 'https://www.google.com', true),

    ];
  }

}
