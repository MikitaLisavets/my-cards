"use strict";
var core_1 = require("@angular/core");
var router_deprecated_1 = require("@angular/router-deprecated");
var router_1 = require("nativescript-angular/router");
var card_component_1 = require("./components/card/card.component");
var login_component_1 = require("./components/login/login.component");
var signup_component_1 = require("./components/signup/signup.component");
var recovery_password_component_1 = require("./components/recovery-password/recovery-password.component");
var main_component_1 = require("./components/main/main.component");
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: "my-app",
            template: "<page-router-outlet></page-router-outlet>",
            directives: [card_component_1.CardComponent, router_1.NS_ROUTER_DIRECTIVES],
            providers: [router_1.NS_ROUTER_PROVIDERS],
        }),
        router_deprecated_1.RouteConfig([
            { path: "/Login",
                component: login_component_1.LoginComponent,
                name: "Login",
                useAsDefault: true
            },
            { path: "/Signup",
                component: signup_component_1.SignupComponent,
                name: "Signup",
                useAsDefault: false
            },
            { path: "/RecoveryPassword",
                component: recovery_password_component_1.RecoveryPasswordComponent,
                name: "RecoveryPassword",
                useAsDefault: false
            },
            { path: "/Main",
                component: main_component_1.MainComponent,
                name: "Main",
                useAsDefault: false
            }
        ]), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHFCQUF3QixlQUFlLENBQUMsQ0FBQTtBQUN4QyxrQ0FBMEIsNEJBQTRCLENBQUMsQ0FBQTtBQUN2RCx1QkFBd0QsNkJBQTZCLENBQUMsQ0FBQTtBQUN0RiwrQkFBNEIsa0NBQWtDLENBQUMsQ0FBQTtBQUMvRCxnQ0FBNkIsb0NBQW9DLENBQUMsQ0FBQTtBQUNsRSxpQ0FBOEIsc0NBQXNDLENBQUMsQ0FBQTtBQUNyRSw0Q0FBd0MsNERBQTRELENBQUMsQ0FBQTtBQUNyRywrQkFBNEIsa0NBQWtDLENBQUMsQ0FBQTtBQWdDL0Q7SUFBQTtJQUVBLENBQUM7SUFoQ0Q7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFFBQVE7WUFDbEIsUUFBUSxFQUFFLDJDQUEyQztZQUNyRCxVQUFVLEVBQUUsQ0FBQyw4QkFBYSxFQUFFLDZCQUFvQixDQUFDO1lBQ2pELFNBQVMsRUFBRSxDQUFDLDRCQUFtQixDQUFDO1NBQ25DLENBQUM7UUFFRCwrQkFBVyxDQUFDO1lBQ1gsRUFBRSxJQUFJLEVBQUUsUUFBUTtnQkFDZCxTQUFTLEVBQUUsZ0NBQWM7Z0JBQ3pCLElBQUksRUFBRSxPQUFPO2dCQUNiLFlBQVksRUFBRSxJQUFJO2FBQ25CO1lBQ0QsRUFBRSxJQUFJLEVBQUUsU0FBUztnQkFDZixTQUFTLEVBQUUsa0NBQWU7Z0JBQzFCLElBQUksRUFBRSxRQUFRO2dCQUNkLFlBQVksRUFBRSxLQUFLO2FBQ3BCO1lBQ0QsRUFBRSxJQUFJLEVBQUUsbUJBQW1CO2dCQUN6QixTQUFTLEVBQUUsdURBQXlCO2dCQUNwQyxJQUFJLEVBQUUsa0JBQWtCO2dCQUN4QixZQUFZLEVBQUUsS0FBSzthQUNwQjtZQUNELEVBQUUsSUFBSSxFQUFFLE9BQU87Z0JBQ2IsU0FBUyxFQUFFLDhCQUFhO2dCQUN4QixJQUFJLEVBQUUsTUFBTTtnQkFDWixZQUFZLEVBQUUsS0FBSzthQUNwQjtTQUNGLENBQUM7O29CQUFBO0lBSUYsbUJBQUM7QUFBRCxDQUFDLEFBRkQsSUFFQztBQUZZLG9CQUFZLGVBRXhCLENBQUEifQ==