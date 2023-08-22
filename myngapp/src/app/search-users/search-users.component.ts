import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {SearchUsersFacade} from "./store/search-users.facade";
import {IUser} from "../Dta";
import {FormBuilder, FormGroup, NgForm, Validators} from "@angular/forms";
import {debounceTime, distinctUntilChanged, Observable, of, Subject, switchMap, takeUntil} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-search-users',
  templateUrl: './search-users.component.html',
  styleUrls: ['./search-users.component.scss']
})
export class SearchUsersComponent  implements OnInit, OnDestroy{

  formGroup: FormGroup = this.formBuilder.group({
    user: ['', Validators.min(2)]
  })

  disposer: Subject<null> = new Subject();
  public users: IUser[] = [];
  public isLoading: boolean = false;
  public totalItems: number = 0;
  public selectedUser:IUser|null = null;
  filteredOptions$: Observable<readonly IUser[]>;
  constructor(private facade: SearchUsersFacade,
              private formBuilder: FormBuilder,
              private router: Router
  ) {
    this.filteredOptions$ = this.formGroup.valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((searchTerm) => {
        console.log(searchTerm);
        this.isLoading = false;
        return this.facade.userList$;
      })
    );
    this.facade.isLoading$.pipe(
      takeUntil(this.disposer)
    ).subscribe((isLoading) => {
      this.isLoading = isLoading;
    });
    this.facade.totalItems$.pipe(
      takeUntil(this.disposer)
    ).subscribe((totalItems) => {
      this.totalItems = totalItems;
    });
    this.facade.userList$.pipe(
      takeUntil(this.disposer)
    ).subscribe((users) => {
      this.users = users;
    });
  }

  public ngOnInit(): void {
    this.facade.init();
  }

  filterUser($event: any) {
    if ($event.query.length >= 2) {
      this.facade.getUsers($event.query);
      console.log(this.facade.userList$);
    }
  }

  searchUser($event: any) {
    const term = this.formGroup.controls['user'].getRawValue();
    console.log(term, term.length, term.length >= 3);
    if (term.length >= 2) {
      this.facade.getUsers(term);
    }
  }

  public async onSelectedUser(user: IUser) {
    console.log(user);
    await this.router.navigateByUrl(`/view/${user.user_id}`);
  }
  ngOnDestroy(): void {
    this.disposer.next(null);
    this.disposer.complete();
  }
}
