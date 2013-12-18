/**
 * Created by Warmsheep on 12/17/13.
 */
var someText = 'You have started your journey.'

function showText($scope){
    $scope.someText = someText
}

var message = {}
message.text = "hello world!"
function showHelloWorld($scope){
    $scope.message = message;
}

var module = angular.module('myApp',[])
module.controller('showModuleText',function($scope){
    var message2 = {}
    message2.text2 = "this is the module text"
    $scope.message2 = message2
})

module.controller('showModuleText2',function($scope){
    var messag3 = {}
    messag3.text3 = "hahahha"
    $scope.message3 = messag3
})

module.controller("school",function($scope){
    $scope.name1 =  "";
    $scope.name2 = "";
    $scope.changeName = function(){
        $scope.name2 = $scope.name1;
    }

})
