(function() {

  'use strict';

  angular
    .module('<%= scriptAppName %>')
    .service('<%= classedName %>', <%= classedName %>);

  function <%= classedName %>() {
    this.hi = function (){
      return 'hi';
    }
  }

})();