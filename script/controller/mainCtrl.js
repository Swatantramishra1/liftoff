app.controller("mainCtrl", ['$scope', function ($scope) {

    $scope.firstStep = true;
    $scope.secondStep = false;
    $scope.form = {
        min: 1,
        max: 100,
        value:30
    }

    var valuesCircle = new RadialProgressChart('.valuesCircle', {
        diameter: 200,
        max: 100,
        round: true,
        series: [
          {
              labelStart: '\uF105',
              value: 500,
              color: {
                  linearGradient: { x1: '0%', y1: '100%', x2: '50%', y2: '0%', spreadMethod: 'pad' },
                  stops: [
                    { offset: '0%', 'stop-color': '#fe08b5', 'stop-opacity': 1 },
                    { offset: '100%', 'stop-color': '#ff1410', 'stop-opacity': 1 }
                  ]
              }
          }
        ],
        center: {
            content: [function (value) {
                return value
            }, ' OF 100'],
            y: 25
        }
    });
    function validation() {
        let status;
        if ($scope.form.name == "" || $scope.form.name == undefined) {
            $scope.form.errorMessage = "Please Enter Name";
            status = false;
        }
        else if ($scope.form.startDate == "" || $scope.form.startDate == undefined) {
            $scope.form.errorMessage = "Please Enter Start Date";
            status = false;
        }
        else if ($scope.form.endDate == "" || $scope.form.endDate == undefined) {
            $scope.form.errorMessage = "Please Enter End Date";
            status = false;
        }
        else {
            status = true;
        }

        return status;
    }
    $scope.resultView = function () {
        if (validation())
        {
            valuesCircle.update(parseInt($scope.form.value));

            $scope.firstStep = false;
            $scope.secondStep = true;
        }

        
    }
  
    $scope.backToForm = function () {
        $scope.firstStep = true;
        $scope.secondStep = false;
        $scope.form.errorMessage = "";
    }

}])