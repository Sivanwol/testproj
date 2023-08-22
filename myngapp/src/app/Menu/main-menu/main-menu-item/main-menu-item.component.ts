import {Component, Input} from '@angular/core';
import {MainMenuItem} from "../../../Dta";
import {Router} from "@angular/router";

@Component({
  selector: 'app-main-menu-item',
  templateUrl: './main-menu-item.component.html',
  styleUrls: ['./main-menu-item.component.scss']
})
export class MainMenuItemComponent {

  @Input()
  public item: MainMenuItem = new MainMenuItem();

  constructor(private router: Router) {
  }

  public onClickLink(): void {
    console.log('click', this.item);
    if (!this.item.externalLink) {
      this.router.navigateByUrl(this.item.link, {replaceUrl: true});
    } else {
      window.open(this.item.link, '_blank');
    }
  }
}
