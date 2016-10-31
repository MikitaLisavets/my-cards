import {Component} from "@angular/core";
import {RouteConfig} from "@angular/router-deprecated";
import {NS_ROUTER_DIRECTIVES, NS_ROUTER_PROVIDERS} from "nativescript-angular/router";
import {CardComponent} from "./components/card/card.component";
import {LoginComponent} from "./components/login/login.component";
import {SignupComponent} from "./components/signup/signup.component";
import {RecoveryPasswordComponent} from "./components/recovery-password/recovery-password.component";
import {MainComponent} from "./components/main/main.component";

@Component({
    selector: "my-app",
    templateUrl: 'app.html',
    directives: [CardComponent, NS_ROUTER_DIRECTIVES],
    providers: [NS_ROUTER_PROVIDERS],
})

@RouteConfig([
  { path: "/login",
    component: LoginComponent,
    name: "Login",
    useAsDefault: false
  },
  { path: "/signup",
    component: SignupComponent,
    name: "Signup",
    useAsDefault: false
  },
  { path: "/recoveryPassword",
    component: RecoveryPasswordComponent,
    name: "RecoveryPassword",
    useAsDefault: false
  },
  { path: "/main",
    component: MainComponent,
    name: "Main",
    useAsDefault: true
  }
])

export class AppComponent {

}
