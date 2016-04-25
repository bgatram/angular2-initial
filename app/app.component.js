System.register(['angular2/core', 'angular2/router', './home/navbar.component', './home/home.component', './users/users.component', './users/user-form.component', './posts/posts.component', './shared/not-found.component'], function(exports_1, context_1) {
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
    var core_1, router_1, navbar_component_1, home_component_1, users_component_1, user_form_component_1, posts_component_1, not_found_component_1;
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
            },
            function (not_found_component_1_1) {
                not_found_component_1 = not_found_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    router_1.RouteConfig([
                        { path: '/', name: 'Home', component: home_component_1.HomeComponent },
                        { path: '/users', name: 'Users', component: users_component_1.UsersComponent },
                        { path: '/users/:id', name: 'EditUser', component: user_form_component_1.UserFormComponent },
                        { path: '/users/new', name: 'NewUser', component: user_form_component_1.UserFormComponent },
                        { path: '/posts', name: 'Posts', component: posts_component_1.PostsComponent },
                        { path: '/not-found', name: 'NotFound', component: not_found_component_1.NotFoundComponent },
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUErQkE7Z0JBQUE7Z0JBRUEsQ0FBQztnQkF2QkQ7b0JBQUMsb0JBQVcsQ0FBQzt3QkFDVCxFQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsOEJBQWEsRUFBQzt3QkFDbkQsRUFBQyxJQUFJLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLGdDQUFjLEVBQUM7d0JBQzFELEVBQUMsSUFBSSxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSx1Q0FBaUIsRUFBQzt3QkFDcEUsRUFBQyxJQUFJLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLHVDQUFpQixFQUFDO3dCQUNuRSxFQUFDLElBQUksRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsZ0NBQWMsRUFBQzt3QkFDMUQsRUFBQyxJQUFJLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLHVDQUFpQixFQUFDO3dCQUNwRSxFQUFDLElBQUksRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsQ0FBQyxNQUFNLENBQUMsRUFBQztxQkFDekQsQ0FBQztvQkFFRCxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxLQUFLO3dCQUNmLFFBQVEsRUFBRSxpSEFNYjt3QkFDRyxVQUFVLEVBQUUsQ0FBQyxrQ0FBZSxFQUFFLDBCQUFpQixDQUFDO3FCQUNuRCxDQUFDOztnQ0FBQTtnQkFHRixtQkFBQztZQUFELENBRkEsQUFFQyxJQUFBO1lBRkQsdUNBRUMsQ0FBQSIsImZpbGUiOiJhcHAuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xyXG5pbXBvcnQge1JvdXRlQ29uZmlnLCBST1VURVJfRElSRUNUSVZFU30gZnJvbSAnYW5ndWxhcjIvcm91dGVyJ1xyXG5cclxuaW1wb3J0IHtOYXZiYXJDb21wb25lbnR9IGZyb20gJy4vaG9tZS9uYXZiYXIuY29tcG9uZW50JztcclxuaW1wb3J0IHtIb21lQ29tcG9uZW50fSBmcm9tICcuL2hvbWUvaG9tZS5jb21wb25lbnQnO1xyXG5pbXBvcnQge1VzZXJzQ29tcG9uZW50fSBmcm9tICcuL3VzZXJzL3VzZXJzLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7VXNlckZvcm1Db21wb25lbnR9IGZyb20gJy4vdXNlcnMvdXNlci1mb3JtLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7UG9zdHNDb21wb25lbnR9IGZyb20gJy4vcG9zdHMvcG9zdHMuY29tcG9uZW50JztcclxuaW1wb3J0IHtOb3RGb3VuZENvbXBvbmVudH0gZnJvbSAnLi9zaGFyZWQvbm90LWZvdW5kLmNvbXBvbmVudCc7XHJcblxyXG5AUm91dGVDb25maWcoW1xyXG4gICAge3BhdGg6ICcvJywgbmFtZTogJ0hvbWUnLCBjb21wb25lbnQ6IEhvbWVDb21wb25lbnR9LFxyXG4gICAge3BhdGg6ICcvdXNlcnMnLCBuYW1lOiAnVXNlcnMnLCBjb21wb25lbnQ6IFVzZXJzQ29tcG9uZW50fSxcclxuICAgIHtwYXRoOiAnL3VzZXJzLzppZCcsIG5hbWU6ICdFZGl0VXNlcicsIGNvbXBvbmVudDogVXNlckZvcm1Db21wb25lbnR9LFxyXG4gICAge3BhdGg6ICcvdXNlcnMvbmV3JywgbmFtZTogJ05ld1VzZXInLCBjb21wb25lbnQ6IFVzZXJGb3JtQ29tcG9uZW50fSxcclxuICAgIHtwYXRoOiAnL3Bvc3RzJywgbmFtZTogJ1Bvc3RzJywgY29tcG9uZW50OiBQb3N0c0NvbXBvbmVudH0sXHJcbiAgICB7cGF0aDogJy9ub3QtZm91bmQnLCBuYW1lOiAnTm90Rm91bmQnLCBjb21wb25lbnQ6IE5vdEZvdW5kQ29tcG9uZW50fSxcclxuICAgIHtwYXRoOiAnLypvdGhlcicsIG5hbWU6ICdPdGhlcicsIHJlZGlyZWN0VG86IFsnSG9tZSddfVxyXG5dKVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2FwcCcsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgPG5hdmJhcj48L25hdmJhcj5cclxuICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cclxuICAgICAgICA8cm91dGVyLW91dGxldD48L3JvdXRlci1vdXRsZXQ+XHJcbiAgICA8L2Rpdj5cclxuXHJcbmAsXHJcbiAgICBkaXJlY3RpdmVzOiBbTmF2YmFyQ29tcG9uZW50LCBST1VURVJfRElSRUNUSVZFU11cclxufSlcclxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7XHJcblxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
