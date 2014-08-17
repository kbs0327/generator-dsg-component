(function() {

  'use strict';

  angular
    .module('<%= scriptAppName %>')
    .service('<%= cameledName %>', <%= classedName %>);

  function <%= classedName %>() {
    this.hi = function (){
      return 'hi';
    }
  }

})();