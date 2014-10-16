
var postController;
var kicks;

(function(){
  'use strict';
  postController = angular.module('postController', ['onsen']);

 

 postController.controller('AppController', function($scope, $data) {
    $scope.doSomething = function() {
      setTimeout(function() {
        alert('tappaed');
      }, 100);
    };
  });


  // postController.controller('DetailController', function($scope, $data) {
  //   $scope.item = $data.selectedItem;
  // });

  postController.controller('MasterController', function($scope) {
   
   
    $scope.items =  [
                      {   id:23,
                          title: 'Free Books',
                          label: '4h',
                          kick: 'If you need free books on programming I can share my books with you.',
                          up:3,
                          icon:'https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xfa1/v/t1.0-1/c0.0.48.48/p48x48/10670263_830875253599686_7200799716820525513_n.jpg?oh=dcb3bb314c5ba5d8209e32e9c6d13d28&oe=54EF71B4&__gda__=1421285012_28e3a67c5b815b2fdb09bdd718f42609',
                          down:11,
                          lat:60.1877361,
                          lon:24.8378263,
                          tags:"Free, Books"
                      },
                      {   id:11,
                          icon:'https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xpa1/v/t1.0-1/p48x48/10410552_10204095140363902_76459674401520846_n.jpg?oh=5747cdddd40ca9d2398bce187c4815d1&oe=54BF7A18&__gda__=1425097220_d6c50344f4e2b11a2aef11006f6e20fa',
                          title: 'Party ahead',
                          label: '2d 4h',
                          kick: 'Tickets are avaliable for welcome party!! be there or be square',
                          up:233,
                          down:1,
                          lat:60.1879361,
                          lon:24.8978263,
                          tags:"Party, People, Gathering"
                      },
                      {   id:11,
                          icon:'https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xpa1/v/t1.0-1/p48x48/10410552_10204095140363902_76459674401520846_n.jpg?oh=5747cdddd40ca9d2398bce187c4815d1&oe=54BF7A18&__gda__=1425097220_d6c50344f4e2b11a2aef11006f6e20fa',
                          title: 'Project Mate',
                          label: '2d 4h',
                          kick: 'I need some one to be in my computer science project! (this idea can be an app in itself umair!!)',
                          up:233,
                          down:1,
                          lat:60.979361,
                          lon:24.8978263,
                          tags:"Project Mate!"
                      }

                  ];   
     
     kicks=$scope.items;
    // $scope.showDetail = function(index) {
    //   var selectedItem = $data.items[index];
    //   $data.selectedItem = selectedItem;
    //   $scope.ons.navigator.pushPage('detail.html', {title : selectedItem.title});


    // };

  });

//   postController.factory('$data', function( $http) {
//         // $http.get('js/data.json').success(function(data){

//              data.items = [
//                       { 
//                           title: 'Free Books',
//                           label: '4h',
//                           desc: 'If you need free books on programming I can share my books with you.'
//                       }
//                   ]; 

                  
//                   return data;

// //}); 


//   });
})();

