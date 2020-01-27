var app = angular.module('sgpa', [
    'ngRoute',
    'ngAnimate',
    'ngMaterial',
    'ngSanitize'
]);

app.config(function($routeProvider) {
    $routeProvider.when("/home", {
        templateUrl: "public/views/home.html",
        controller: 'HomeController'
    });
    $routeProvider.when("/servicos", {
        templateUrl: "public/views/servicos.html",
        controller: 'ServicoController'
    });
    $routeProvider.when("/senhas", {
        templateUrl: "public/views/senha.html",
        controller: 'SenhaController'
    })
    $routeProvider.otherwise('/servicos');
});