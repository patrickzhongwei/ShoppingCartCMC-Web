import { LoginComponent } from "./login/login.component";
import { Routes } from "@angular/router";
import { IndexComponent } from "./index.component";

export const IndexRoutes: Routes = [
  {
    path: "",
    children: [
      {
        path: "",
        component: IndexComponent,
      },



    //   /** *
    //  * Patrick: [not used. leave for futuer development].
    //  */

      // {
      //   path: "login",
      //   component: LoginComponent,
      // },

    ],
  },
];
