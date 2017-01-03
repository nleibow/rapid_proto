angular.module('WeedRepport', ['ngResource'])
	.controller('WeedController', WeedController)

	.factory('WeedFactory', function($resource){
    return $resource('http://localhost:3000/api/:id')
  })

function WeedController(WeedFactory){
 var vm = this;
    vm.revList=[];

  function queryRevs(){
   
    let weedGet = WeedFactory.query({}, function(response){
      vm.revList = response;
  })}
    queryRevs()
};





