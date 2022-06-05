import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { Router, CanActivate, RouterStateSnapshot } from "@angular/router";
import { AuthService } from "../services/auth.service";
import { tap } from "rxjs/operators";

/** *
 * Patrick: [not used. leave for futuer development].
 */

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private authService: AuthService) {}

  canActivate(route, state: RouterStateSnapshot): Observable<boolean> {
    return this.authService.isLoggedIn$.pipe(
      tap((allowed) => {
        if (!allowed) {
          this.router.navigate(["/login"], {
            queryParams: { returnUrl: state.url },
          });
        }
      })
    );
  }
}
