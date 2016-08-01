var app;
(function (app) {
    var postAdd;
    (function (postAdd) {
        var PostAddCtrl = (function () {
            function PostAddCtrl($location, constantService, dataService) {
                this.$location = $location;
                this.constantService = constantService;
                this.dataService = dataService;
            }
            PostAddCtrl.prototype.add = function () {
                var _this = this;
                this.dataService.add(this.constantService.apiPostURI, this.post)
                    .then(function (result) {
                    alert(result.Title + ' submitted successfully');
                    _this.$location.path('/');
                });
            };
            PostAddCtrl.$inject = ['$location', 'constantService', 'dataService'];
            return PostAddCtrl;
        }());
        ng.module('blog')
            .controller('PostAddCtrl', PostAddCtrl);
    })(postAdd = app.postAdd || (app.postAdd = {}));
})(app || (app = {}));
//# sourceMappingURL=postAddCtrl.js.map