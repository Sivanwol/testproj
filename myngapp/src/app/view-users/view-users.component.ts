import {Component, OnDestroy, OnInit} from '@angular/core';
import {ViewUsersFacade} from "./store/view-users.facade";
import {Subject, takeUntil} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-view-users',
  templateUrl: './view-users.component.html',
  styleUrls: ['./view-users.component.scss']
})
export class ViewUsersComponent implements OnInit, OnDestroy {

  public isLoading: boolean = false;
  disposer: Subject<null> = new Subject();

  constructor(
    private facade: ViewUsersFacade,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
  }

  ngOnDestroy(): void {
    this.disposer.next(null);
    this.disposer.complete();
  }

  ngOnInit(): void {

    this.facade.isLoading$.pipe(
      takeUntil(this.disposer)
    ).subscribe((isLoading) => {
      this.isLoading = isLoading;
    });
    this.facade.userFeed$.pipe(
      takeUntil(this.disposer)
    ).subscribe((userFeed) => {
      console.log(userFeed);
    });
    const userId = parseInt(this.activatedRoute.snapshot.params['user_id']);
    this.facade.init();
    this.facade.getUserFeed(userId, '');
  }
}
