﻿module app {
    class Config {
        constructor($routeProvider: ng.route.IRouteProvider) {
            $routeProvider
                .when("/", {
                    templateUrl: "/app/posts/list.html",
                    controller: "PostsCtrl as vm"
                })
                .when("/edit/:id", {
                    templateUrl: "/app/posts/edit.html",
                    controller: "PostEditCtrl as vm"
                })
                .when("/add", {
                    templateUrl: "/app/posts/add.html",
                    controller: "PostAddCtrl as vm"
                })
                .otherwise({ redirectTo: '/' });
        }
    }
    Config.$inject = ['$routeProvider'];

    var mainApp = ng.module('blog', ['ngRoute']);
    mainApp.config(Config);
}