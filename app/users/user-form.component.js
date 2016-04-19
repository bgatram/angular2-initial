System.register(['angular2/core', 'angular2/common'], function(exports_1, context_1) {
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
    var core_1, common_1;
    var UserFormComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            }],
        execute: function() {
            UserFormComponent = (function () {
                function UserFormComponent(fb) {
                    this.form = fb.group({
                        name: [],
                        email: [],
                        phone: [],
                        address: fb.group({
                            street: [],
                            suite: [],
                            city: [],
                            zipcode: []
                        })
                    });
                }
                UserFormComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'dev/users/user-form.component.html'
                    }), 
                    __metadata('design:paramtypes', [common_1.FormBuilder])
                ], UserFormComponent);
                return UserFormComponent;
            }());
            exports_1("UserFormComponent", UserFormComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXJzL3VzZXItZm9ybS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFVQTtnQkFHSSwyQkFBWSxFQUFlO29CQUN2QixJQUFJLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUM7d0JBQ2pCLElBQUksRUFBQyxFQUFFO3dCQUNQLEtBQUssRUFBRSxFQUFFO3dCQUNULEtBQUssRUFBRSxFQUFFO3dCQUNULE9BQU8sRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDOzRCQUNkLE1BQU0sRUFBRSxFQUFFOzRCQUNWLEtBQUssRUFBRSxFQUFFOzRCQUNULElBQUksRUFBRSxFQUFFOzRCQUNSLE9BQU8sRUFBRSxFQUFFO3lCQUNkLENBQUM7cUJBQ0wsQ0FBQyxDQUFBO2dCQUNOLENBQUM7Z0JBbkJMO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsV0FBVyxFQUFFLG9DQUFvQztxQkFDcEQsQ0FBQzs7cUNBQUE7Z0JBa0JGLHdCQUFDO1lBQUQsQ0FoQkEsQUFnQkMsSUFBQTtZQWhCRCxpREFnQkMsQ0FBQSIsImZpbGUiOiJ1c2Vycy91c2VyLWZvcm0uY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIENyZWF0ZWQgYnkgQmFsYSBvbiA0LzE4LzIwMTYuXHJcbiAqL1xyXG5pbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcbmltcG9ydCB7Rm9ybUJ1aWxkZXIsIENvbnRyb2xHcm91cH0gZnJvbSAnYW5ndWxhcjIvY29tbW9uJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgdGVtcGxhdGVVcmw6ICdkZXYvdXNlcnMvdXNlci1mb3JtLmNvbXBvbmVudC5odG1sJ1xyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFVzZXJGb3JtQ29tcG9uZW50e1xyXG4gICAgZm9ybTogQ29udHJvbEdyb3VwO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGZiOiBGb3JtQnVpbGRlcil7XHJcbiAgICAgICAgdGhpcy5mb3JtID0gZmIuZ3JvdXAoe1xyXG4gICAgICAgICAgICBuYW1lOltdLFxyXG4gICAgICAgICAgICBlbWFpbDogW10sXHJcbiAgICAgICAgICAgIHBob25lOiBbXSxcclxuICAgICAgICAgICAgYWRkcmVzczogZmIuZ3JvdXAoe1xyXG4gICAgICAgICAgICAgICAgc3RyZWV0OiBbXSxcclxuICAgICAgICAgICAgICAgIHN1aXRlOiBbXSxcclxuICAgICAgICAgICAgICAgIGNpdHk6IFtdLFxyXG4gICAgICAgICAgICAgICAgemlwY29kZTogW11cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
