var app;
(function (app) {
    var postList;
    (function (postList) {
        var PostsCtrl = (function () {
            function PostsCtrl(constantService, dataService) {
                this.constantService = constantService;
                this.dataService = dataService;
                this.getPosts();
            }
            PostsCtrl.prototype.remove = function (Id) {
                var self = this; // Attention here.. check 'this' in TypeScript and JavaScript
                this.dataService.remove(this.constantService.apiPostURI + Id)
                    .then(function (result) {
                    self.getPosts();
                });
            };
            PostsCtrl.prototype.getPosts = function () {
                var _this = this;
                this.dataService.get(this.constantService.apiPostURI).then(function (result) {
                    _this.posts = result;
                });
            };
            PostsCtrl.$inject = ['constantService', 'dataService'];
            return PostsCtrl;
        }());
    })(postList = app.postList || (app.postList = {}));
})(app || (app = {}));
//# sourceMappingURL=postsCtrl.js.map