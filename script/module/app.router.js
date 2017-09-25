/// <reference path="../../view/home.html" />
app.config(function ($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl: "../../view/home.html"
    })
    .when("/profile", {
        templateUrl: "../../view/profile.html"
    })
    .when("/resume", {
        templateUrl: "../../view/resume.html"
    })
    .when("/portfolio", {
        templateUrl: "../../view/portfolio.html"
    })
    .when("/contact", {
        templateUrl: "../../view/contact.html"
    })
});