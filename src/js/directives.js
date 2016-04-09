app.directive('teaInfo', ['meanTeaData', function(meanTeaData) {
  return {
    restrict: 'E',
    templateUrl: 'partials/teaInfo.html',
    controller: function($scope) {
      $scope.teas = meanTeaData;
      $scope.logIt = function(value) {
        console.log(value);
      };
    },
  };
}]);

app.directive('indivTea', function() {
  return {
    scope: { tea: '=' },
    templateUrl: 'partials/indivTea.html',
  };
});

app.directive('teaImg', function() {
  return {
    scope: { tea: '=' },
    templateUrl: 'partials/indivImg.html',
  };
});

app.directive('navDir', function() {
  return {
    templateUrl: 'partials/nav.html'
  };
});

app.directive('searchDir', ['getCategories', function(getCategories) {
  return {
    templateUrl: 'partials/search.html',
    controller: function($scope) {
      $scope.categories = getCategories.getEm();
    }
  };
}]);
