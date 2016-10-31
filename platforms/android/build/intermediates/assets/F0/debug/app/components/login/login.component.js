"use strict";
var core_1 = require("@angular/core");
var router_deprecated_1 = require("@angular/router-deprecated");
var LoginComponent = (function () {
    function LoginComponent(router) {
        this.router = router;
    }
    LoginComponent.prototype.recoveryPassword = function () {
        this.router.navigate(["RecoveryPassword"]);
    };
    LoginComponent.prototype.signup = function () {
        this.router.navigate(["Signup"]);
    };
    LoginComponent.prototype.login = function (email, password) {
        // if (email.text == '1' && password.text == '1') {
        this.router.navigate(["Main"]);
        // }
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: "login-page",
            templateUrl: 'components/login/login.html',
            styleUrls: ['components/login/login.css']
        }), 
        __metadata('design:paramtypes', [router_deprecated_1.Router])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxxQkFBd0IsZUFBZSxDQUFDLENBQUE7QUFDeEMsa0NBQXFCLDRCQUE0QixDQUFDLENBQUE7QUFRbEQ7SUFDRSx3QkFBb0IsTUFBYztRQUFkLFdBQU0sR0FBTixNQUFNLENBQVE7SUFFbEMsQ0FBQztJQUVELHlDQUFnQixHQUFoQjtRQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFFRCwrQkFBTSxHQUFOO1FBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFFRCw4QkFBSyxHQUFMLFVBQU0sS0FBSyxFQUFFLFFBQVE7UUFDbkIsbURBQW1EO1FBQ25ELElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUMvQixJQUFJO0lBQ04sQ0FBQztJQXZCSDtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsWUFBWTtZQUN0QixXQUFXLEVBQUUsNkJBQTZCO1lBQzFDLFNBQVMsRUFBRSxDQUFDLDRCQUE0QixDQUFDO1NBQzVDLENBQUM7O3NCQUFBO0lBcUJGLHFCQUFDO0FBQUQsQ0FBQyxBQW5CRCxJQW1CQztBQW5CWSxzQkFBYyxpQkFtQjFCLENBQUEifQ==