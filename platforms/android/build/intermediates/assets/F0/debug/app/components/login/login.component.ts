import {Component} from "@angular/core";
import {Router} from "@angular/router-deprecated";

@Component({
    selector: "login-page",
    templateUrl: 'components/login/login.html',
    styleUrls: ['components/login/login.css']
})

export class LoginComponent {
  constructor(private router: Router) {

  }

  recoveryPassword() {
    this.router.navigate(["RecoveryPassword"]);
  }

  signup() {
    this.router.navigate(["Signup"]);
  }

  login(email, password) {
    // if (email.text == '1' && password.text == '1') {
    this.router.navigate(["Main"]);
    // }
  }

}
