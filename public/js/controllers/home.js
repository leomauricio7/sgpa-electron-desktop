app.controller('HomeController', function($scope) {

    $scope.back = function() {
        history.back();
    };
    $scope.teste = function() {
        alert('teste')
    }

});