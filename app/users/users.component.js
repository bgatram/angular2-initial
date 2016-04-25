System.register(['angular2/core', 'angular2/router', './user.service'], function(exports_1, context_1) {
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
    var core_1, router_1, user_service_1;
    var UsersComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            }],
        execute: function() {
            UsersComponent = (function () {
                function UsersComponent(_service) {
                    this._service = _service;
                }
                UsersComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._service.getUsers()
                        .subscribe(function (users) { return _this.users = users; });
                };
                UsersComponent.prototype.deleteUser = function (user) {
                    var _this = this;
                    if (confirm("Are you sure you want to delete " + user.name + "?")) {
                        var index = this.users.indexOf(user);
                        this.users.splice(index, 1);
                        this._service.deleteUser(user.id)
                            .subscribe(null, function (err) {
                            alert("Could not delete the user.");
                            _this.users.splice(index, 0, user);
                        });
                    }
                };
                UsersComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'dev/users/users.component.html',
                        providers: [user_service_1.UserService],
                        directives: [router_1.RouterLink]
                    }), 
                    __metadata('design:paramtypes', [user_service_1.UserService])
                ], UsersComponent);
                return UsersComponent;
            }());
            exports_1("UsersComponent", UsersComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXJzL3VzZXJzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQWFBO2dCQUdJLHdCQUFvQixRQUFxQjtvQkFBckIsYUFBUSxHQUFSLFFBQVEsQ0FBYTtnQkFFekMsQ0FBQztnQkFFRCxpQ0FBUSxHQUFSO29CQUFBLGlCQUdDO29CQUZHLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFO3lCQUNuQixTQUFTLENBQUMsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssRUFBbEIsQ0FBa0IsQ0FBQyxDQUFDO2dCQUNoRCxDQUFDO2dCQUVELG1DQUFVLEdBQVYsVUFBVyxJQUFJO29CQUFmLGlCQWVDO29CQWRHLEVBQUUsQ0FBQSxDQUFDLE9BQU8sQ0FBQyxrQ0FBa0MsR0FBRyxJQUFJLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBRSxDQUFDLENBQUEsQ0FBQzt3QkFDL0QsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUE7d0JBRXBDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQzt3QkFFNUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQzs2QkFDNUIsU0FBUyxDQUFDLElBQUksRUFDWCxVQUFBLEdBQUc7NEJBQ0MsS0FBSyxDQUFDLDRCQUE0QixDQUFDLENBQUM7NEJBQ3BDLEtBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7d0JBQ3RDLENBQUMsQ0FDSixDQUFDO29CQUVWLENBQUM7Z0JBQ0wsQ0FBQztnQkFoQ0w7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxXQUFXLEVBQUUsZ0NBQWdDO3dCQUM3QyxTQUFTLEVBQUUsQ0FBQywwQkFBVyxDQUFDO3dCQUN4QixVQUFVLEVBQUUsQ0FBQyxtQkFBVSxDQUFDO3FCQUMzQixDQUFDOztrQ0FBQTtnQkE4QkYscUJBQUM7WUFBRCxDQTdCQSxBQTZCQyxJQUFBO1lBN0JELDJDQTZCQyxDQUFBIiwiZmlsZSI6InVzZXJzL3VzZXJzLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IEJhbGEgb24gNC8xOC8yMDE2LlxyXG4gKi9cclxuaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSAnYW5ndWxhcjIvY29yZSdcclxuaW1wb3J0IHtSb3V0ZXJMaW5rfSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInO1xyXG5cclxuaW1wb3J0IHtVc2VyU2VydmljZX0gZnJvbSAnLi91c2VyLnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICB0ZW1wbGF0ZVVybDogJ2Rldi91c2Vycy91c2Vycy5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBwcm92aWRlcnM6IFtVc2VyU2VydmljZV0sXHJcbiAgICBkaXJlY3RpdmVzOiBbUm91dGVyTGlua11cclxufSlcclxuZXhwb3J0IGNsYXNzIFVzZXJzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0e1xyXG4gICAgdXNlcnM6IGFueVtdO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX3NlcnZpY2U6IFVzZXJTZXJ2aWNlKXtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5fc2VydmljZS5nZXRVc2VycygpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUodXNlcnMgPT4gdGhpcy51c2VycyA9IHVzZXJzKTtcclxuICAgIH1cclxuXHJcbiAgICBkZWxldGVVc2VyKHVzZXIpe1xyXG4gICAgICAgIGlmKGNvbmZpcm0oXCJBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIFwiICsgdXNlci5uYW1lICsgXCI/XCIgKSl7XHJcbiAgICAgICAgICAgIHZhciBpbmRleCA9IHRoaXMudXNlcnMuaW5kZXhPZih1c2VyKVxyXG5cclxuICAgICAgICAgICAgdGhpcy51c2Vycy5zcGxpY2UoaW5kZXgsIDEpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5fc2VydmljZS5kZWxldGVVc2VyKHVzZXIuaWQpXHJcbiAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgZXJyID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQoXCJDb3VsZCBub3QgZGVsZXRlIHRoZSB1c2VyLlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51c2Vycy5zcGxpY2UoaW5kZXgsIDAsIHVzZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
