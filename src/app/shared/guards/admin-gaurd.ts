import { Injectable } from "@angular/core";
import { Router, CanActivate } from "@angular/router";
import { AuthService } from "../services/auth.service";

/** *
 * Patrick: [not used. leave for futuer development].
 */

@Injectable()
export class AdminGaurd implements CanActivate {
  constructor(private router: Router, private authService: AuthService) {}

  canActivate() {
    if (this.authService.isLoggedIn$ && this.authService.isAdmin$) {
      return true;
    }
    this.router.navigate(["no-access"]);
    return false;
  }
}
