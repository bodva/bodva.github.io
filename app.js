var app = angular.module('appKingLear', []);

app.controller('DramatisPersonaeController', ['$scope', '$http', function($scope, $http){
    $http.get('personas.json').success(function(data) {
        $scope.personas = data;
        console.log(data);
    });
}]);