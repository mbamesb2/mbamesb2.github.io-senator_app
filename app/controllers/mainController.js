app.controller('DetailController', ['$scope', '$http', 'myService', function($scope, $http, myService) {
      
      // Retrieve ID from myService
      $scope.senatorid = myService.get();
      var id = $scope.senatorid;

      // Create photo url string
      $scope.senatorPhoto = "https://theunitedstates.io/images/congress/225x275/" + $scope.senatorid + ".jpg"
     
     // Get request for Senator summary
      var getSenator = function(){

        $http.get("https://api.propublica.org/congress/v1/members/" + id + ".json", {
            headers: {
                "X-API-Key": "FfGSmsgnMQkZ8bqWxquB9vx1MOvNZIhxShYRRd40"
            }
        })
        .success(function(data){
            $scope.senator = data;   
        })
        .error(function(err){
            $scope.senator = "error";
        });
    }
    
    // Get request for recent votes
    var getVotes = function(){

        $http.get("https://api.propublica.org/congress/v1/members/" + id + "/votes.json", {
            headers: {
                "X-API-Key": "FfGSmsgnMQkZ8bqWxquB9vx1MOvNZIhxShYRRd40"
            }
        })
        .success(function(data){
            $scope.votes = data;   
        })
        .error(function(err){
            $scope.votes = "error";
        });
    }

    // Get request for cosponsored bills
     var getBills = function(){

        $http.get("https://api.propublica.org/congress/v1/members/" + id +"/bills/cosponsored.json", {
            headers: {
                "X-API-Key": "FfGSmsgnMQkZ8bqWxquB9vx1MOvNZIhxShYRRd40"
            }
        })
        .success(function(data){
            $scope.bills = data;   
        })
        .error(function(err){
            $scope.bills = "error";
        });
    }


    
        getSenator();
        getVotes();
        getBills();


}]);



app.controller('MainController', ['$scope', '$http', 'myService', function($scope, $http, myService){

    $scope.submitData = function() {
        var name = $scope.stateName;
        var abbr = abbrState(name);

        // Validate state name and convert to abbreviation
        if (abbr != null) {
        
            $http.get("https://api.propublica.org/congress/v1/members/senate/"+ abbr + "/current.json", {
                headers: { 
                    "X-API-Key": "FfGSmsgnMQkZ8bqWxquB9vx1MOvNZIhxShYRRd40"
                }
            })
            .success(function(data) { 
                $scope.new = data; 
                }) 
                .error(function(err) { 
                $scope.new = "error"; 
            }); 
        }
        else{
            $scope.new = "error";
        }
            
    }

    // Pass Senator ID to DetailController
   $scope.chooseSenator = function( senator ){
        console.log(senator.id);
        myService.set(senator.id);
    } 
    

}]);


