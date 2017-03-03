(function(){
    angular.module("JobCard").service('mainTask', ['$http', function($http){
        
        this.Cvone = function(request, callback){
            $http.post('secure-api/get/cv', request).then(function(response){
                return callback(response);
            }).catch(function(error){
                return callback(error);
            });
        }
        this.jobCard = function(request, callback){
            $http.post('secure-api/get/card', request).then(function(response){
                return callback(response.data);
            }).catch(function(error){
                return callback(error);
            });
        }
        
    }]).controller('main', ['$scope','$stateParams','mainTask', function($scope, $stateParams, mainTask){
        if(localStorage['User-Data'] !== undefined){
            var user = JSON.parse(localStorage['User-Data']);
            var user_id = user.userid;
            var payload = $stateParams.b;
            console.log(user_id);
            yourCv(user_id);
            Jobcard();
            
            function yourCv(userid){
                var request = {
                  userid: userid,
                  token: payload
                };
               mainTask.Cvone(request, function(results){
                   var cvs = results.data;
                   $scope.cvitems = cvs;
                  // console.log($scope.cvitems);
               }); 
            }
            
         function Jobcard(){
                var request ={
                  token: payload  
                };
                
          $scope.alljobs =  mainTask.jobCard(request, function(result){
              if(result){
                  $scope.alljobs = result;
                 // console.log($scope.alljobs);
              }
              
          });
             
            
             
            }
            
            
           
            
        }
        
    }]);
}())