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

app.directive('indivTea', ['shoppingCart', function(shoppingCart) {
  return {
    scope: { tea: '=' },
    templateUrl: 'partials/indivTea.html',
    controller: function($scope) {
      $scope.cart = shoppingCart;
      $scope.quantity = 1;
    }
  };
}]);

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

app.directive('searchDir', ['getCategories', 'shoppingCart', function(getCategories, shoppingCart) {
  return {
    templateUrl: 'partials/search.html',
    controller: function($scope) {
      $scope.categories = getCategories.getEm();
      console.log(shoppingCart);
      $scope.showCheckout = false;
      $scope.cart = shoppingCart;
    }
  };
}]);

app.directive('checkOut', ['shoppingCart', function(shoppingCart) {
  return {
    templateUrl: 'partials/teaCheckout.html',
    controller: function($scope) {
      $scope.cart = shoppingCart;
    }
  };
}]);
