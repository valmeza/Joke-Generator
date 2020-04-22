"use strict";

(function() {
   $(document).ready(function(){
       console.log('DOM is ready');

       $.ajax('https://api.chucknorris.io/jokes/random').done(function(data, status){
           console.log('Everything is looking good.', status)
           $('.joke').text(data.value);
       }).fail(function(status, error) {
           console.log('oops something went wrong.', status);
           console.log(error);
       }).always(function() {
           console.log('this always runs');
       })
   });
})();