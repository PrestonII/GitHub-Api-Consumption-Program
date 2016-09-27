﻿define("otherApp", function(require) {

        var $ = require("jquery");
        var angular = require("angular");
        var Organization = require("Organization");

        console.log($);
        console.log(angular);
        console.log(Organization);

        var app = angular.module('gitApp2', ["gitApp2"]);

        app.controller("SimpleController",
            function ($scope) {
                $scope.repositories = [
                    { name: "black", location: "x" },
                    { name: "blue", location: "y" },
                    { name: "red", location: "z" }
                ];
            });


    });

//requirejs(["jquery", "Organization"], function ($, Organization) {

//    var self = this;
//    this.organization = {};

//    $("#search-button").click(function (event) {
//        event.preventDefault();
//        var searchName = $("#organization-search-box")[0].value;

//        console.log(searchName);

//        self.organization = new Organization(searchName);
//    });

//    $("#start-arrow").click(function () {
//        $("#github-search").animate({
//            marginTop: 0
//        }, 500);
//    });

//    $("#close-button")
//        .click(function () {
//            $("#github-search")
//                .animate({
//                    marginTop: "100%"
//                },
//                    500);
//        });
//});