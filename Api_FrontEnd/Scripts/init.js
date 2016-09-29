requirejs.config({
    baseUrl: "../Scripts",
    paths: {
        angular:            "_lib/angular",
        ngRoute:            "_lib/angular-route",
        ngResource:         "_lib/angular-resource",

        jquery:             "_lib/jquery-1.10.2.min",
        bootstrap:          "_lib/bootstrap.min",
        
        Organization:       "app/objs/Organization",
        Repository:         "app/objs/Repository",
        Commit:             "app/objs/Commit",
        File:               "app/objs/File",

        animationManager:   "system/animationManager",

        gitApp:             "app/modules/gitApp",
        app:                "app"
    },

    shim: {
        ngRoute: {
            deps: ['angular'],
            exports: 'angular'
        },

        ngResource: {
            deps: ['angular'],
            exports: 'angular'
        },

        angular: {
            exports: 'angular'
        },

        jquery: {
            exports: 'jquery'
        }
    }
});

requirejs(["app"], function(app) {
    app.init();
});