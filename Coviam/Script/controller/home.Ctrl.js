app.controller("home.Ctrl", ['$scope', '$rootScope', '$timeout', function ($scope, $rootScope, $timeout) {
    $scope.isPlayenabled = false;
    $scope.btnName = "Play";
    $scope.timerplaytime = true;
    function shuffle(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    }
    $scope.lists = [

        {
            name: "Banana",
            imgUrl: "../Coviam/img/box/banana.png"
        },
        {
            name: "Carrot",
            imgUrl: "../Coviam/img/box/carrot.png"
        },
        {
            name: "Banana",
            imgUrl: "../Coviam/img/box/banana.png"
        },
        {
            name: "Graps",
            imgUrl: "../Coviam/img/box/graps.png"
        },
        {
            name: "Graps",
            imgUrl: "../Coviam/img/box/graps.png"

        },
        {
            name: "Spectrum",
            imgUrl: "../Coviam/img/box/spectrum.png"
        },
        {
            name: "Guava",
            imgUrl: "../Coviam/img/box/Guava.png"
        },
        {
            name: "Spectrum",
            imgUrl: "../Coviam/img/box/spectrum.png"
        },
        {
            name: "Banana",
            imgUrl: "../Coviam/img/box/banana.png"
        },
        {
            name: "Guava",
            imgUrl: "../Coviam/img/box/Guava.png"
        },
        {
            name: "Graps",
            imgUrl: "../Coviam/img/box/graps.png"
        },
        {
            name: "Banana",
            imgUrl: "../Coviam/img/box/banana.png"
        },
        {
            name: "Carrot",
            imgUrl: "../Coviam/img/box/carrot.png"
        },
        {
            name: "Banana",
            imgUrl: "../Coviam/img/box/banana.png"
        },
        {
            name: "Graps",
            imgUrl: "../Coviam/img/box/graps.png"
        },
        {
            name: "Banana",
            imgUrl: "../Coviam/img/box/banana.png"
        },

    ];
    $scope.lists = shuffle($scope.lists);
  
    var tempArray = [];
    var matchedArray = [];
    function hideImges()
    {
        $('#img' + tempArray[0]).css('display', 'none');
        $('#img' + tempArray[1]).css('display', 'none');

        tempArray = [];
        $scope.message = "";
    }
    function imagematched()
    {
        $('#' + tempArray[0]).text("");
        $('#' + tempArray[0]).css('background', 'green');
        $('#' + tempArray[1]).text("");
        $('#' + tempArray[1]).css('background', 'green');
        tempArray = [];
        $scope.message = "";
        if(matchedArray.length==16)
        {
            clearInterval($scope.timerVa);
            $scope.isPlayenabled = false;
            $("#mainBox").addClass("opacity");
            $scope.message = "Congrats Game completed !";
            $scope.isComplete = true;
        }
    }

    function checkexists(val) {
        if (matchedArray.indexOf(val) == -1)
            return true;
        else
            return false;
    }
    $scope.checkGame=function(index)
    {
        if ($scope.isPlayenabled)
        {
            if (checkexists(index)) {
                tempArray.push(index);
                $('#img' + index).css('display', 'block');
                $('#img' + index).addClass("animate");
                if (tempArray.length == 2) {
                    if (tempArray[0] != tempArray[1]) {
                        if (($scope.lists[tempArray[0]].name == $scope.lists[tempArray[1]].name)) {
                            matchedArray.push(tempArray[0]);
                            matchedArray.push(tempArray[1]);
                            $timeout(function () {
                                imagematched();
                            }, 300);
                            $scope.message = "Congrats images matched";
                        }
                        else {
                            $timeout(function () {
                                hideImges()
                            }, 300);

                        }
                    }
                    else {
                        $scope.message = "can not be same ,please start again";
                        $timeout(function () {
                            hideImges()
                        }, 300);
                    }

                }
            }
        }
      
      
      
    }
    
    var count = 0;
    var  timer;
    $scope.playGame = function () {
        if ($scope.btnName == "Play")
        {
            $scope.btnName = "Pause";
            $scope.isPlayenabled = true;
            $("#mainBox").removeClass("opacity");
            $scope.timerVa = setInterval(function () {
                if ($scope.isPlayenabled)
                {
                    $("#counter").html("Timer - " + ((count++) + 1)+" sec");
                    if (count > 59) {

                        clearInterval($scope.timerVa);
                        $scope.isPlayenabled = false;
                        $("#mainBox").addClass("opacity");
                        $scope.message = "Time has been completed";
                        $scope.isComplete = true;
                        $scope.$apply();

                        
                    }
                }
                

              
            }, 1000);
        }
        else {
            clearInterval($scope.timerVa);
            $scope.btnName = "Play";
            $scope.isPlayenabled = false;
            $("#mainBox").addClass("opacity");
        }
      
    }
  
  
}]);