(function() {
  'use strict';

  angular
    .module('yeomanDemo')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
