app.directive('header', function() {
    return {
        restrict: 'E',
        replace: false,
        templateUrl: "resources/general/views/header.html",
        controller: 'headerCtrl'
    }
});

app.directive('footer', function() {
    return {
        restrict: 'E',
        replace: false,
        templateUrl: "resources/general/views/footer.html"
    }
});
