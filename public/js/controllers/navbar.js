app.controller('NavBarController', function($scope, $window, $mdSidenav) {

    $scope.back = function() {
        history.back();
    };

    $scope.toggleLeft = buildToggler('left');

    function buildToggler(componentId) {
        return function() {
            $mdSidenav(componentId).toggle();
        };
    }

});