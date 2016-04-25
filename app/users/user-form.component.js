System.register(['angular2/core', 'angular2/common', 'angular2/router', '../validators/basicValidators', './user.service', './user'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1, router_1, basicValidators_1, user_service_1, user_1;
    var UserFormComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (basicValidators_1_1) {
                basicValidators_1 = basicValidators_1_1;
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            },
            function (user_1_1) {
                user_1 = user_1_1;
            }],
        execute: function() {
            UserFormComponent = (function () {
                function UserFormComponent(fb, _router, _routeParams, _userService) {
                    this._router = _router;
                    this._routeParams = _routeParams;
                    this._userService = _userService;
                    this.user = new user_1.User();
                    this.form = fb.group({
                        name: ['', common_1.Validators.required],
                        email: ['', basicValidators_1.BasicValidators.email],
                        phone: [],
                        address: fb.group({
                            street: [],
                            suite: [],
                            city: [],
                            zipcode: []
                        })
                    });
                }
                UserFormComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    var id = this._routeParams.get("id");
                    this.title = id ? "Edit User" : "New User";
                    if (!id)
                        return;
                    this._userService.getUser(id)
                        .subscribe(function (user) { return _this.user = user; }, function (response) {
                        if (response.status == 404) {
                            _this._router.navigate(['NotFound']);
                        }
                    });
                };
                UserFormComponent.prototype.routerCanDeactivate = function () {
                    if (this.form.dirty) {
                        return confirm('You have unsaved changes!');
                    }
                    else {
                        return true;
                    }
                };
                UserFormComponent.prototype.save = function () {
                    var _this = this;
                    var result;
                    if (this.user.id) {
                        result = this._userService.updateUser(this.user);
                    }
                    else {
                        result = this._userService.addUser(this.user);
                        result.subscribe(function (x) {
                            _this._router.navigate(['Users']);
                        });
                    }
                };
                UserFormComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'dev/users/user-form.component.html',
                        providers: [user_service_1.UserService]
                    }), 
                    __metadata('design:paramtypes', [common_1.FormBuilder, router_1.Router, router_1.RouteParams, user_service_1.UserService])
                ], UserFormComponent);
                return UserFormComponent;
            }());
            exports_1("UserFormComponent", UserFormComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXJzL3VzZXItZm9ybS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFnQkE7Z0JBS0ksMkJBQ0ksRUFBZSxFQUNQLE9BQWUsRUFDZixZQUF5QixFQUN6QixZQUF5QjtvQkFGekIsWUFBTyxHQUFQLE9BQU8sQ0FBUTtvQkFDZixpQkFBWSxHQUFaLFlBQVksQ0FBYTtvQkFDekIsaUJBQVksR0FBWixZQUFZLENBQWE7b0JBTnJDLFNBQUksR0FBRyxJQUFJLFdBQUksRUFBRSxDQUFDO29CQU9kLElBQUksQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQzt3QkFDakIsSUFBSSxFQUFDLENBQUMsRUFBRSxFQUFFLG1CQUFVLENBQUMsUUFBUSxDQUFDO3dCQUM5QixLQUFLLEVBQUUsQ0FBQyxFQUFFLEVBQUMsaUNBQWUsQ0FBQyxLQUFLLENBQUM7d0JBQ2pDLEtBQUssRUFBRSxFQUFFO3dCQUNULE9BQU8sRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDOzRCQUNkLE1BQU0sRUFBRSxFQUFFOzRCQUNWLEtBQUssRUFBRSxFQUFFOzRCQUNULElBQUksRUFBRSxFQUFFOzRCQUNSLE9BQU8sRUFBRSxFQUFFO3lCQUNkLENBQUM7cUJBQ0wsQ0FBQyxDQUFDO2dCQUNQLENBQUM7Z0JBRUQsb0NBQVEsR0FBUjtvQkFBQSxpQkFpQkM7b0JBaEJHLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUVyQyxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsR0FBRyxXQUFXLEdBQUcsVUFBVSxDQUFDO29CQUUzQyxFQUFFLENBQUEsQ0FBQyxDQUFDLEVBQUUsQ0FBQzt3QkFDSCxNQUFNLENBQUM7b0JBRVgsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDO3lCQUN4QixTQUFTLENBQ04sVUFBQSxJQUFJLElBQUksT0FBQSxLQUFJLENBQUMsSUFBSSxHQUFHLElBQUksRUFBaEIsQ0FBZ0IsRUFDeEIsVUFBQSxRQUFRO3dCQUNKLEVBQUUsQ0FBQSxDQUFDLFFBQVEsQ0FBQyxNQUFNLElBQUksR0FBRyxDQUFDLENBQUEsQ0FBQzs0QkFDdkIsS0FBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO3dCQUN4QyxDQUFDO29CQUNMLENBQUMsQ0FDSixDQUFBO2dCQUNULENBQUM7Z0JBRUQsK0NBQW1CLEdBQW5CO29CQUNJLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUEsQ0FBQzt3QkFDaEIsTUFBTSxDQUFDLE9BQU8sQ0FBQywyQkFBMkIsQ0FBQyxDQUFDO29CQUNoRCxDQUFDO29CQUFBLElBQUksQ0FBQyxDQUFDO3dCQUNILE1BQU0sQ0FBQyxJQUFJLENBQUM7b0JBQ2hCLENBQUM7Z0JBQ0wsQ0FBQztnQkFDRCxnQ0FBSSxHQUFKO29CQUFBLGlCQVlDO29CQVhHLElBQUksTUFBTSxDQUFDO29CQUVYLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUEsQ0FBQzt3QkFDYixNQUFNLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUNyRCxDQUFDO29CQUFBLElBQUksQ0FBQyxDQUFDO3dCQUNILE1BQU0sR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7d0JBQzlDLE1BQU0sQ0FBQyxTQUFTLENBQUMsVUFBQSxDQUFDOzRCQUNWLEtBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQzt3QkFDekMsQ0FBQyxDQUFDLENBQUE7b0JBQ04sQ0FBQztnQkFFTCxDQUFDO2dCQWxFTDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFdBQVcsRUFBRSxvQ0FBb0M7d0JBQ2pELFNBQVMsRUFBRSxDQUFDLDBCQUFXLENBQUM7cUJBQzNCLENBQUM7O3FDQUFBO2dCQWdFRix3QkFBQztZQUFELENBOURBLEFBOERDLElBQUE7WUE5REQsaURBOERDLENBQUEiLCJmaWxlIjoidXNlcnMvdXNlci1mb3JtLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IEJhbGEgb24gNC8xOC8yMDE2LlxyXG4gKi9cclxuaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcbmltcG9ydCB7Rm9ybUJ1aWxkZXIsIENvbnRyb2xHcm91cCwgVmFsaWRhdG9yc30gZnJvbSAnYW5ndWxhcjIvY29tbW9uJztcclxuaW1wb3J0IHtDYW5EZWFjdGl2YXRlLCBSb3V0ZXIsIFJvdXRlUGFyYW1zfSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInO1xyXG5cclxuaW1wb3J0IHtCYXNpY1ZhbGlkYXRvcnN9IGZyb20gJy4uL3ZhbGlkYXRvcnMvYmFzaWNWYWxpZGF0b3JzJztcclxuaW1wb3J0IHtVc2VyU2VydmljZX0gZnJvbSAnLi91c2VyLnNlcnZpY2UnO1xyXG5pbXBvcnQge1VzZXJ9IGZyb20gJy4vdXNlcic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHRlbXBsYXRlVXJsOiAnZGV2L3VzZXJzL3VzZXItZm9ybS5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBwcm92aWRlcnM6IFtVc2VyU2VydmljZV1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBVc2VyRm9ybUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQ2FuRGVhY3RpdmF0ZXtcclxuICAgIGZvcm06IENvbnRyb2xHcm91cDtcclxuICAgIHRpdGxlOiBzdHJpbmc7XHJcbiAgICB1c2VyID0gbmV3IFVzZXIoKTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBmYjogRm9ybUJ1aWxkZXIsXHJcbiAgICAgICAgcHJpdmF0ZSBfcm91dGVyOiBSb3V0ZXIsXHJcbiAgICAgICAgcHJpdmF0ZSBfcm91dGVQYXJhbXM6IFJvdXRlUGFyYW1zLFxyXG4gICAgICAgIHByaXZhdGUgX3VzZXJTZXJ2aWNlOiBVc2VyU2VydmljZSl7XHJcbiAgICAgICAgdGhpcy5mb3JtID0gZmIuZ3JvdXAoe1xyXG4gICAgICAgICAgICBuYW1lOlsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXHJcbiAgICAgICAgICAgIGVtYWlsOiBbJycsQmFzaWNWYWxpZGF0b3JzLmVtYWlsXSxcclxuICAgICAgICAgICAgcGhvbmU6IFtdLFxyXG4gICAgICAgICAgICBhZGRyZXNzOiBmYi5ncm91cCh7XHJcbiAgICAgICAgICAgICAgICBzdHJlZXQ6IFtdLFxyXG4gICAgICAgICAgICAgICAgc3VpdGU6IFtdLFxyXG4gICAgICAgICAgICAgICAgY2l0eTogW10sXHJcbiAgICAgICAgICAgICAgICB6aXBjb2RlOiBbXVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCl7XHJcbiAgICAgICAgdmFyIGlkID0gdGhpcy5fcm91dGVQYXJhbXMuZ2V0KFwiaWRcIik7XHJcblxyXG4gICAgICAgIHRoaXMudGl0bGUgPSBpZCA/IFwiRWRpdCBVc2VyXCIgOiBcIk5ldyBVc2VyXCI7XHJcblxyXG4gICAgICAgIGlmKCFpZClcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgICB0aGlzLl91c2VyU2VydmljZS5nZXRVc2VyKGlkKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAgICAgdXNlciA9PiB0aGlzLnVzZXIgPSB1c2VyLFxyXG4gICAgICAgICAgICAgICAgcmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKHJlc3BvbnNlLnN0YXR1cyA9PSA0MDQpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGUoWydOb3RGb3VuZCddKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICByb3V0ZXJDYW5EZWFjdGl2YXRlKCl7XHJcbiAgICAgICAgaWYodGhpcy5mb3JtLmRpcnR5KXtcclxuICAgICAgICAgICAgcmV0dXJuIGNvbmZpcm0oJ1lvdSBoYXZlIHVuc2F2ZWQgY2hhbmdlcyEnKTtcclxuICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHNhdmUoKXtcclxuICAgICAgICB2YXIgcmVzdWx0O1xyXG5cclxuICAgICAgICBpZih0aGlzLnVzZXIuaWQpe1xyXG4gICAgICAgICAgICByZXN1bHQgPSB0aGlzLl91c2VyU2VydmljZS51cGRhdGVVc2VyKHRoaXMudXNlcik7XHJcbiAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICByZXN1bHQgPSB0aGlzLl91c2VyU2VydmljZS5hZGRVc2VyKHRoaXMudXNlcik7XHJcbiAgICAgICAgICAgIHJlc3VsdC5zdWJzY3JpYmUoeCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlKFsnVXNlcnMnXSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
