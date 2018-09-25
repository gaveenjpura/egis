var app = angular.module('app');

/**
 * All application routes
 * ---------------------------------------------------------------------------------------------------------------
 */
app.config(function ($routeProvider, $locationProvider, $httpProvider) {

    // making URLs prettier
    $locationProvider.html5Mode({enabled: true});

    $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8; multipart/form-data';


    $routeProvider

    // application root route definition
        .when('/', {
            templateUrl: 'app/views/pages/home_page.html'
        })
        .otherwise({
            redirectTo: '/'
        });


});