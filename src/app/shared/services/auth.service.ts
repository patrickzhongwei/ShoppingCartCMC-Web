import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { BehaviorSubject, Observable, of } from "rxjs";
import { filter, map } from "rxjs/operators";
import { User } from "../models/user";

/** *********************************************************************
 * Patrick: [not used. leave for futuer development].
 * redirect to STS server, get Json security token after successul logging
 * **********************************************************************
 */

@Injectable()
export class AuthService {
  user: Observable<User | undefined>;

  private subject = new BehaviorSubject<User | undefined>(undefined);

  user$: Observable<User | undefined> = this.subject
    .asObservable()
    .pipe(filter((user) => !!user));

  isLoggedIn$: Observable<boolean> = this.user$.pipe(
    map((user) => !!user!.$key)
  );

  isLoggedOut$: Observable<boolean> = this.isLoggedIn$.pipe(
    map((isLoggedIn) => !isLoggedIn)
  );

  isAdmin$: Observable<boolean> = this.user$.pipe(
    map((user) => !!user!.isAdmin)
  );

  constructor(
    private router: Router
  ) {

    /** *
     * Patrick: [todo in future].
     */

    this.user = of(new User()); //PW: todo

    this.user.subscribe((user) => {
      console.log({ user });

      /** *
       * Patrick: [todo in future].
       */
    });
  }

  logout() {
    /** *
     * Patrick: [todo in future].
     */
  }


}
