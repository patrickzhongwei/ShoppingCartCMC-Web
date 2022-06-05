import { NgForm, EmailValidator } from "@angular/forms";
import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { User } from "src/app/shared/models/user";
import { AuthService } from "src/app/shared/services/auth.service";
import { ToastrService } from "src/app/shared/services/toastr.service";

declare var $: any;

/** *
 * Patrick: [not used. leave for futuer development].
 */

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
  providers: [EmailValidator],
})
export class LoginComponent implements OnInit {
  user = {
    emailId: "",
    loginPassword: "",
  };

  errorInUserCreate = false;
  errorMessage: any;
  createUser;

  constructor(
    private authService: AuthService,
    private toastService: ToastrService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.createUser = new User();
  }

  ngOnInit() {}

  addUser(userForm: NgForm) {

  }

  signInWithEmail(userForm: NgForm) {
    /** *
     * Patrick: [todo in future].
     */
  }

  signIn() {
    /** *
     * Patrick: [todo in future].
     */
  }
}
