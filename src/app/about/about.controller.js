(function() {
  'use strict';

  angular
    .module('pat2016SznFe')
    .controller('AboutController', AboutController);

  /** @ngInject */
  function AboutController() {
    var vm = this;

    vm.creationDate = 1451473855018;
    vm.someText = "Halo, Helga!";
    
  }
})();
