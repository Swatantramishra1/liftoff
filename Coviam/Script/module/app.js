/// <reference path="../../view/dashboard.html" />
var app = angular.module("app", ['ui.router']);

app.config(function ($stateProvider, $urlRouterProvider) {
    //
    // For any unmatched url, redirect to /state1
    $urlRouterProvider.otherwise("/Index");
    //
    // Now set up the states
    $stateProvider
      .state('Index', {
          url: "/Index",
          templateUrl: "/../Coviam/view/dashboard.html",
          controller: "home.Ctrl"
      })
  
});