System.register(['angular2/core', './post.service', '../users/user.service', '../shared/spinner.component', '../shared/pagination.component'], function(exports_1, context_1) {
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
    var core_1, post_service_1, user_service_1, spinner_component_1, pagination_component_1;
    var PostsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (post_service_1_1) {
                post_service_1 = post_service_1_1;
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            },
            function (spinner_component_1_1) {
                spinner_component_1 = spinner_component_1_1;
            },
            function (pagination_component_1_1) {
                pagination_component_1 = pagination_component_1_1;
            }],
        execute: function() {
            PostsComponent = (function () {
                function PostsComponent(_postService, _userService) {
                    this._postService = _postService;
                    this._userService = _userService;
                    this.posts = [];
                    this.pagedPosts = [];
                    this.users = [];
                    this.pageSize = 10;
                }
                PostsComponent.prototype.ngOnInit = function () {
                    this.loadUsers();
                    this.loadPosts();
                };
                PostsComponent.prototype.loadUsers = function () {
                    var _this = this;
                    this._userService.getUsers()
                        .subscribe(function (users) { return _this.users = users; }, null, function () { _this.postsLoading = false; });
                };
                PostsComponent.prototype.loadPosts = function (filter) {
                    var _this = this;
                    this.postsLoading = true;
                    this._postService.getPosts(filter)
                        .subscribe(function (posts) {
                        _this.posts = posts,
                            _this.pagedPosts = _this.getPostsInPage(1);
                    }, null, function () { _this.postsLoading = false; });
                };
                PostsComponent.prototype.reloadPosts = function (filter) {
                    this.currentPost = null;
                    this.loadPosts(filter);
                };
                PostsComponent.prototype.select = function (post) {
                    var _this = this;
                    this.currentPost = post;
                    this._postService.getComments(post.id)
                        .subscribe(function (comments) {
                        return _this.currentPost.comments = comments;
                    }, null, function () { return _this.commentsLoading = false; });
                };
                PostsComponent.prototype.onPageChanged = function (page) {
                    this.pagedPosts = this.getPostsInPage(page);
                };
                PostsComponent.prototype.getPostsInPage = function (page) {
                    var result = [];
                    var startingIndex = (page - 1) * this.pageSize;
                    var endIndex = Math.min(startingIndex + this.pageSize, this.posts.length);
                    for (var i = startingIndex; i < endIndex; i++)
                        result.push(this.posts[i]);
                    return result;
                };
                PostsComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'dev/posts/posts.component.html',
                        styles: ["\n        .posts li {cursor: default;}\n        .posts li:hover {background: #ecf0f1;}\n        .list-group-item.active,      \n        .list-group-item.active:hover,\n        .list-group-item.active:focus {\n            background-color: #ecf0f1;\n            border-color: #ecf0f1;\n            color: #2c3e50;\n        }\n    "],
                        providers: [post_service_1.PostService, user_service_1.UserService],
                        directives: [spinner_component_1.SpinnerComponent, pagination_component_1.PaginationComponent]
                    }), 
                    __metadata('design:paramtypes', [post_service_1.PostService, user_service_1.UserService])
                ], PostsComponent);
                return PostsComponent;
            }());
            exports_1("PostsComponent", PostsComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvc3RzL3Bvc3RzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQTRCQTtnQkFTSSx3QkFDWSxZQUF5QixFQUN6QixZQUF5QjtvQkFEekIsaUJBQVksR0FBWixZQUFZLENBQWE7b0JBQ3pCLGlCQUFZLEdBQVosWUFBWSxDQUFhO29CQVZyQyxVQUFLLEdBQUcsRUFBRSxDQUFDO29CQUNYLGVBQVUsR0FBRyxFQUFFLENBQUM7b0JBQ2hCLFVBQUssR0FBRyxFQUFFLENBQUM7b0JBSVgsYUFBUSxHQUFHLEVBQUUsQ0FBQztnQkFLZCxDQUFDO2dCQUVELGlDQUFRLEdBQVI7b0JBQ0ksSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO29CQUNqQixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7Z0JBQ3JCLENBQUM7Z0JBRU8sa0NBQVMsR0FBakI7b0JBQUEsaUJBTUM7b0JBTEcsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUU7eUJBQ3ZCLFNBQVMsQ0FDTixVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxFQUFsQixDQUFrQixFQUMzQixJQUFJLEVBQ0osY0FBTyxLQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNqRCxDQUFDO2dCQUVPLGtDQUFTLEdBQWpCLFVBQWtCLE1BQU87b0JBQXpCLGlCQVVDO29CQVRHLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO29CQUN6QixJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUM7eUJBQzdCLFNBQVMsQ0FDTixVQUFBLEtBQUs7d0JBQ0QsS0FBSSxDQUFDLEtBQUssR0FBRyxLQUFLOzRCQUNsQixLQUFJLENBQUMsVUFBVSxHQUFHLEtBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQzdDLENBQUMsRUFDRCxJQUFJLEVBQ0osY0FBTyxLQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQyxDQUFBLENBQUMsQ0FBQyxDQUFDO2dCQUNoRCxDQUFDO2dCQUVELG9DQUFXLEdBQVgsVUFBWSxNQUFNO29CQUNkLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO29CQUV4QixJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUUzQixDQUFDO2dCQUVELCtCQUFNLEdBQU4sVUFBTyxJQUFJO29CQUFYLGlCQVFDO29CQVBHLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO29CQUN4QixJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDO3lCQUNqQyxTQUFTLENBQ04sVUFBQSxRQUFRO3dCQUNKLE9BQUEsS0FBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEdBQUcsUUFBUTtvQkFBcEMsQ0FBb0MsRUFDcEMsSUFBSSxFQUNSLGNBQU0sT0FBQSxLQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssRUFBNUIsQ0FBNEIsQ0FBQyxDQUFDO2dCQUNoRCxDQUFDO2dCQUNELHNDQUFhLEdBQWIsVUFBYyxJQUFJO29CQUNkLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDaEQsQ0FBQztnQkFFTyx1Q0FBYyxHQUF0QixVQUF1QixJQUFJO29CQUN2QixJQUFJLE1BQU0sR0FBRyxFQUFFLENBQUM7b0JBQ2hCLElBQUksYUFBYSxHQUFHLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7b0JBQy9DLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztvQkFFMUUsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsYUFBYSxFQUFFLENBQUMsR0FBRyxRQUFRLEVBQUUsQ0FBQyxFQUFFO3dCQUN6QyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFFL0IsTUFBTSxDQUFDLE1BQU0sQ0FBQztnQkFDbEIsQ0FBQztnQkFyRkw7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxXQUFXLEVBQUUsZ0NBQWdDO3dCQUM3QyxNQUFNLEVBQUMsQ0FBQywyVUFVUCxDQUFDO3dCQUNGLFNBQVMsRUFBRSxDQUFDLDBCQUFXLEVBQUUsMEJBQVcsQ0FBQzt3QkFDckMsVUFBVSxFQUFFLENBQUMsb0NBQWdCLEVBQUUsMENBQW1CLENBQUM7cUJBQ3RELENBQUM7O2tDQUFBO2dCQXdFRixxQkFBQztZQUFELENBdEVBLEFBc0VDLElBQUE7WUF0RUQsMkNBc0VDLENBQUEiLCJmaWxlIjoicG9zdHMvcG9zdHMuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIENyZWF0ZWQgYnkgQmFsYSBvbiA0LzE4LzIwMTYuXHJcbiAqL1xyXG5pbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tICdhbmd1bGFyMi9jb3JlJ1xyXG5cclxuaW1wb3J0IHtQb3N0U2VydmljZX0gZnJvbSAnLi9wb3N0LnNlcnZpY2UnO1xyXG5pbXBvcnQge1VzZXJTZXJ2aWNlfSBmcm9tICcuLi91c2Vycy91c2VyLnNlcnZpY2UnO1xyXG5pbXBvcnQge1NwaW5uZXJDb21wb25lbnR9IGZyb20gJy4uL3NoYXJlZC9zcGlubmVyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7UGFnaW5hdGlvbkNvbXBvbmVudH0gZnJvbSAnLi4vc2hhcmVkL3BhZ2luYXRpb24uY29tcG9uZW50JztcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHRlbXBsYXRlVXJsOiAnZGV2L3Bvc3RzL3Bvc3RzLmNvbXBvbmVudC5odG1sJyxcclxuICAgIHN0eWxlczpbYFxyXG4gICAgICAgIC5wb3N0cyBsaSB7Y3Vyc29yOiBkZWZhdWx0O31cclxuICAgICAgICAucG9zdHMgbGk6aG92ZXIge2JhY2tncm91bmQ6ICNlY2YwZjE7fVxyXG4gICAgICAgIC5saXN0LWdyb3VwLWl0ZW0uYWN0aXZlLCAgICAgIFxyXG4gICAgICAgIC5saXN0LWdyb3VwLWl0ZW0uYWN0aXZlOmhvdmVyLFxyXG4gICAgICAgIC5saXN0LWdyb3VwLWl0ZW0uYWN0aXZlOmZvY3VzIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2VjZjBmMTtcclxuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAjZWNmMGYxO1xyXG4gICAgICAgICAgICBjb2xvcjogIzJjM2U1MDtcclxuICAgICAgICB9XHJcbiAgICBgXSxcclxuICAgIHByb3ZpZGVyczogW1Bvc3RTZXJ2aWNlLCBVc2VyU2VydmljZV0sXHJcbiAgICBkaXJlY3RpdmVzOiBbU3Bpbm5lckNvbXBvbmVudCwgUGFnaW5hdGlvbkNvbXBvbmVudF1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBQb3N0c0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdHtcclxuICAgIHBvc3RzID0gW107XHJcbiAgICBwYWdlZFBvc3RzID0gW107XHJcbiAgICB1c2VycyA9IFtdO1xyXG4gICAgcG9zdHNMb2FkaW5nO1xyXG4gICAgY29tbWVudHNMb2FkaW5nO1xyXG4gICAgY3VycmVudFBvc3Q7XHJcbiAgICBwYWdlU2l6ZSA9IDEwO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgX3Bvc3RTZXJ2aWNlOiBQb3N0U2VydmljZSxcclxuICAgICAgICBwcml2YXRlIF91c2VyU2VydmljZTogVXNlclNlcnZpY2Upe1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCl7XHJcbiAgICAgICAgdGhpcy5sb2FkVXNlcnMoKTtcclxuICAgICAgICB0aGlzLmxvYWRQb3N0cygpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgbG9hZFVzZXJzKCl7XHJcbiAgICAgICAgdGhpcy5fdXNlclNlcnZpY2UuZ2V0VXNlcnMoKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAgICAgdXNlcnMgPT4gdGhpcy51c2VycyA9IHVzZXJzLFxyXG4gICAgICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgICAgICgpID0+IHt0aGlzLnBvc3RzTG9hZGluZyA9IGZhbHNlOyB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGxvYWRQb3N0cyhmaWx0ZXI/KXtcclxuICAgICAgICB0aGlzLnBvc3RzTG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5fcG9zdFNlcnZpY2UuZ2V0UG9zdHMoZmlsdGVyKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAgICAgcG9zdHMgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucG9zdHMgPSBwb3N0cyxcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBhZ2VkUG9zdHMgPSB0aGlzLmdldFBvc3RzSW5QYWdlKDEpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgICAoKSA9PiB7dGhpcy5wb3N0c0xvYWRpbmcgPSBmYWxzZTt9KTtcclxuICAgIH1cclxuXHJcbiAgICByZWxvYWRQb3N0cyhmaWx0ZXIpe1xyXG4gICAgICAgIHRoaXMuY3VycmVudFBvc3QgPSBudWxsO1xyXG5cclxuICAgICAgICB0aGlzLmxvYWRQb3N0cyhmaWx0ZXIpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBzZWxlY3QocG9zdCl7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50UG9zdCA9IHBvc3Q7XHJcbiAgICAgICAgdGhpcy5fcG9zdFNlcnZpY2UuZ2V0Q29tbWVudHMocG9zdC5pZClcclxuICAgICAgICAgICAgLnN1YnNjcmliZShcclxuICAgICAgICAgICAgICAgIGNvbW1lbnRzID0+XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50UG9zdC5jb21tZW50cyA9IGNvbW1lbnRzLFxyXG4gICAgICAgICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgICAoKSA9PiB0aGlzLmNvbW1lbnRzTG9hZGluZyA9IGZhbHNlKTtcclxuICAgIH1cclxuICAgIG9uUGFnZUNoYW5nZWQocGFnZSkge1xyXG4gICAgICAgIHRoaXMucGFnZWRQb3N0cyA9IHRoaXMuZ2V0UG9zdHNJblBhZ2UocGFnZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRQb3N0c0luUGFnZShwYWdlKXtcclxuICAgICAgICB2YXIgcmVzdWx0ID0gW107XHJcbiAgICAgICAgdmFyIHN0YXJ0aW5nSW5kZXggPSAocGFnZSAtIDEpICogdGhpcy5wYWdlU2l6ZTtcclxuICAgICAgICB2YXIgZW5kSW5kZXggPSBNYXRoLm1pbihzdGFydGluZ0luZGV4ICsgdGhpcy5wYWdlU2l6ZSwgdGhpcy5wb3N0cy5sZW5ndGgpO1xyXG5cclxuICAgICAgICBmb3IgKHZhciBpID0gc3RhcnRpbmdJbmRleDsgaSA8IGVuZEluZGV4OyBpKyspXHJcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHRoaXMucG9zdHNbaV0pO1xyXG5cclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG5cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
