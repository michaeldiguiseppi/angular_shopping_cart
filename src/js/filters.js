app.filter('centsToDollars', function() {
  return function(input) {
    return input/100;
  };
});

app.filter('bool', function() {
  return function(input) {
    return (input) ? 'Yes' : 'No';
  };
});
