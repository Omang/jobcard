(function(){
    angular.module("JobCard",['ui.router', 'ui.bootstrap', 'ngFileUpload'])
                 .config(function($stateProvider, $urlRouterProvider){
                  $urlRouterProvider.otherwise('/');
                  $stateProvider.state('login', {
                      url: '/',
                      templateUrl: 'jobcard/log-in/login.html',
                      controller: 'loginController'
                  }).state('register', {
                     url: '/register',
                     templateUrl: 'jobcard/register/register.html',
                     controller: 'registerController'
                  }).state('dashboard', {
                      url: '/dashboard/:a',
                      templateUrl: 'jobcard/dashboard/dashboard.html',
                      controller: 'dashboard'
                  }).state('dashboard.jobcard', {
                      url: '/dashboard.jobcard',
                      templateUrl: 'jobcard/templates/createjob-form.html',
                      controller: 'dashboard'
                  }).state('dashboard.cv', {
                      url: '/dashboard.cv',
                      templateUrl: 'jobcard/templates/cv-form.html',
                      controller: 'dashboard'
                  }).state('dashboard.profile', {
                      url: '/dashboard.profile',
                      templateUrl: 'jobcard/templates/edit-profile.html',
                      controller: 'dashboard'
                  }).state('main',{
                       url:'/main/:b',
                       templateUrl: '/jobcard/templates/main.html',
                       controller: 'main'
                }).state('main.jobloc', {
                      url: '/main.jobloc',
                      templateUrl: '/jobcard/templates/job-location.html',
                      controller: 'main'
                  }).state('main.jobpro',{
                        url: '/main.jobpro',
                        templateUrl: 'jobcard/templates/job-proffesion.html',
                        controller: 'main'
                  }).state('main.joblev',{
                        url: '/main.joblev',
                        templateUrl: 'jobcard/templates/job-level.html',
                        controller: 'main'
                  });
    });
}())