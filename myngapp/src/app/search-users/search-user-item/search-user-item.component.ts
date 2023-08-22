import {Component, EventEmitter, Input, Output} from '@angular/core';
import {IUser} from "../../Dta";

@Component({
  selector: 'app-search-user-item',
  templateUrl: './search-user-item.component.html',
  styleUrls: ['./search-user-item.component.scss']
})
export class SearchUserItemComponent {
  @Input() user: IUser | null = null;
  @Output() userSelected = new EventEmitter<IUser>();

  onUserSelected() {
    this.userSelected.emit(this.user!);
  }
}
