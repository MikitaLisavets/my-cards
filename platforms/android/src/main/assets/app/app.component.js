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
            templateUrl: 'app.html',
            directives: [card_component_1.CardComponent, router_1.NS_ROUTER_DIRECTIVES],
            providers: [router_1.NS_ROUTER_PROVIDERS],
        }),
        router_deprecated_1.RouteConfig([
            { path: "/login",
                component: login_component_1.LoginComponent,
                name: "Login",
                useAsDefault: false
            },
            { path: "/signup",
                component: signup_component_1.SignupComponent,
                name: "Signup",
                useAsDefault: false
            },
            { path: "/recoveryPassword",
                component: recovery_password_component_1.RecoveryPasswordComponent,
                name: "RecoveryPassword",
                useAsDefault: false
            },
            { path: "/main",
                component: main_component_1.MainComponent,
                name: "Main",
                useAsDefault: true
            }
        ]), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHFCQUF3QixlQUFlLENBQUMsQ0FBQTtBQUN4QyxrQ0FBMEIsNEJBQTRCLENBQUMsQ0FBQTtBQUN2RCx1QkFBd0QsNkJBQTZCLENBQUMsQ0FBQTtBQUN0RiwrQkFBNEIsa0NBQWtDLENBQUMsQ0FBQTtBQUMvRCxnQ0FBNkIsb0NBQW9DLENBQUMsQ0FBQTtBQUNsRSxpQ0FBOEIsc0NBQXNDLENBQUMsQ0FBQTtBQUNyRSw0Q0FBd0MsNERBQTRELENBQUMsQ0FBQTtBQUNyRywrQkFBNEIsa0NBQWtDLENBQUMsQ0FBQTtBQWdDL0Q7SUFBQTtJQUVBLENBQUM7SUFoQ0Q7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFFBQVE7WUFDbEIsV0FBVyxFQUFFLFVBQVU7WUFDdkIsVUFBVSxFQUFFLENBQUMsOEJBQWEsRUFBRSw2QkFBb0IsQ0FBQztZQUNqRCxTQUFTLEVBQUUsQ0FBQyw0QkFBbUIsQ0FBQztTQUNuQyxDQUFDO1FBRUQsK0JBQVcsQ0FBQztZQUNYLEVBQUUsSUFBSSxFQUFFLFFBQVE7Z0JBQ2QsU0FBUyxFQUFFLGdDQUFjO2dCQUN6QixJQUFJLEVBQUUsT0FBTztnQkFDYixZQUFZLEVBQUUsS0FBSzthQUNwQjtZQUNELEVBQUUsSUFBSSxFQUFFLFNBQVM7Z0JBQ2YsU0FBUyxFQUFFLGtDQUFlO2dCQUMxQixJQUFJLEVBQUUsUUFBUTtnQkFDZCxZQUFZLEVBQUUsS0FBSzthQUNwQjtZQUNELEVBQUUsSUFBSSxFQUFFLG1CQUFtQjtnQkFDekIsU0FBUyxFQUFFLHVEQUF5QjtnQkFDcEMsSUFBSSxFQUFFLGtCQUFrQjtnQkFDeEIsWUFBWSxFQUFFLEtBQUs7YUFDcEI7WUFDRCxFQUFFLElBQUksRUFBRSxPQUFPO2dCQUNiLFNBQVMsRUFBRSw4QkFBYTtnQkFDeEIsSUFBSSxFQUFFLE1BQU07Z0JBQ1osWUFBWSxFQUFFLElBQUk7YUFDbkI7U0FDRixDQUFDOztvQkFBQTtJQUlGLG1CQUFDO0FBQUQsQ0FBQyxBQUZELElBRUM7QUFGWSxvQkFBWSxlQUV4QixDQUFBIn0=