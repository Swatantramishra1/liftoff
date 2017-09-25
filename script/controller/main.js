app.controller('mainCtrl', function ($scope, $rootScope, $http) {


    $rootScope.config = config;
    var req = {
        method: 'GET',
        url: 'https://quotes.rest/qod?category=inspire',
        headers: {
            "Accept": "application/json"
        }
    }
    $http(req)
    .then(function (response) {
        $scope.quotes = response.data.contents.quotes[0];
     
    });


});