(function() {
  'use strict';

  angular
    .module('pat2016SznFe')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
