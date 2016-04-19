System.register(['angular2/core', 'angular2/router', './home/navbar.component', './home/home.component', './users/users.component', './users/user-form.component', './posts/posts.component'], function(exports_1, context_1) {
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
    var core_1, router_1, navbar_component_1, home_component_1, users_component_1, user_form_component_1, posts_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (navbar_component_1_1) {
                navbar_component_1 = navbar_component_1_1;
            },
            function (home_component_1_1) {
                home_component_1 = home_component_1_1;
            },
            function (users_component_1_1) {
                users_component_1 = users_component_1_1;
            },
            function (user_form_component_1_1) {
                user_form_component_1 = user_form_component_1_1;
            },
            function (posts_component_1_1) {
                posts_component_1 = posts_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    router_1.RouteConfig([
                        { path: '/', name: 'Home', component: home_component_1.HomeComponent },
                        { path: '/users', name: 'Users', component: users_component_1.UsersComponent },
                        { path: '/users/new', name: 'NewUser', component: user_form_component_1.UserFormComponent },
                        { path: '/posts', name: 'Posts', component: posts_component_1.PostsComponent },
                        { path: '/*other', name: 'Other', redirectTo: ['Home'] }
                    ]),
                    core_1.Component({
                        selector: 'app',
                        template: "\n    <navbar></navbar>\n    <div class=\"container\">\n        <router-outlet></router-outlet>\n    </div>\n\n",
                        directives: [navbar_component_1.NavbarComponent, router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUE0QkE7Z0JBQUE7Z0JBRUEsQ0FBQztnQkFyQkQ7b0JBQUMsb0JBQVcsQ0FBQzt3QkFDVCxFQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsOEJBQWEsRUFBQzt3QkFDbkQsRUFBQyxJQUFJLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLGdDQUFjLEVBQUM7d0JBQzFELEVBQUMsSUFBSSxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSx1Q0FBaUIsRUFBQzt3QkFDbkUsRUFBQyxJQUFJLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLGdDQUFjLEVBQUM7d0JBQzFELEVBQUMsSUFBSSxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxFQUFDO3FCQUN6RCxDQUFDO29CQUVELGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLEtBQUs7d0JBQ2YsUUFBUSxFQUFFLGlIQU1iO3dCQUNHLFVBQVUsRUFBRSxDQUFDLGtDQUFlLEVBQUUsMEJBQWlCLENBQUM7cUJBQ25ELENBQUM7O2dDQUFBO2dCQUdGLG1CQUFDO1lBQUQsQ0FGQSxBQUVDLElBQUE7WUFGRCx1Q0FFQyxDQUFBIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcbmltcG9ydCB7Um91dGVDb25maWcsIFJPVVRFUl9ESVJFQ1RJVkVTfSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInXHJcblxyXG5pbXBvcnQge05hdmJhckNvbXBvbmVudH0gZnJvbSAnLi9ob21lL25hdmJhci5jb21wb25lbnQnO1xyXG5pbXBvcnQge0hvbWVDb21wb25lbnR9IGZyb20gJy4vaG9tZS9ob21lLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7VXNlcnNDb21wb25lbnR9IGZyb20gJy4vdXNlcnMvdXNlcnMuY29tcG9uZW50JztcclxuaW1wb3J0IHtVc2VyRm9ybUNvbXBvbmVudH0gZnJvbSAnLi91c2Vycy91c2VyLWZvcm0uY29tcG9uZW50JztcclxuaW1wb3J0IHtQb3N0c0NvbXBvbmVudH0gZnJvbSAnLi9wb3N0cy9wb3N0cy5jb21wb25lbnQnO1xyXG5cclxuQFJvdXRlQ29uZmlnKFtcclxuICAgIHtwYXRoOiAnLycsIG5hbWU6ICdIb21lJywgY29tcG9uZW50OiBIb21lQ29tcG9uZW50fSxcclxuICAgIHtwYXRoOiAnL3VzZXJzJywgbmFtZTogJ1VzZXJzJywgY29tcG9uZW50OiBVc2Vyc0NvbXBvbmVudH0sXHJcbiAgICB7cGF0aDogJy91c2Vycy9uZXcnLCBuYW1lOiAnTmV3VXNlcicsIGNvbXBvbmVudDogVXNlckZvcm1Db21wb25lbnR9LFxyXG4gICAge3BhdGg6ICcvcG9zdHMnLCBuYW1lOiAnUG9zdHMnLCBjb21wb25lbnQ6IFBvc3RzQ29tcG9uZW50fSxcclxuICAgIHtwYXRoOiAnLypvdGhlcicsIG5hbWU6ICdPdGhlcicsIHJlZGlyZWN0VG86IFsnSG9tZSddfVxyXG5dKVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2FwcCcsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgPG5hdmJhcj48L25hdmJhcj5cclxuICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cclxuICAgICAgICA8cm91dGVyLW91dGxldD48L3JvdXRlci1vdXRsZXQ+XHJcbiAgICA8L2Rpdj5cclxuXHJcbmAsXHJcbiAgICBkaXJlY3RpdmVzOiBbTmF2YmFyQ29tcG9uZW50LCBST1VURVJfRElSRUNUSVZFU11cclxufSlcclxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7XHJcblxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
