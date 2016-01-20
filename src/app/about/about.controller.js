(function() {
  'use strict';

  angular
  .module('pat2016SznFe')
  .controller('AboutController', AboutController);

  /** @ngInject */
  function AboutController() {
    var vm = this;

    vm.aboutTitle = "O mnie"; 
    vm.suppText = "Nazywam się Jarek "
    +"Spirydowicz i jestem początkującym frontendowcem. Kilka stron www "
    +"już w swojej karierze zrobiłem, w tym takie, przy których "
    +"korzystałem z CMS. Mam pojęcie o HTML, PHP, potrafię użyć "
    +"JavaScript i jQuery, ale AngularJS to dla mnie nowość (do tej pory "
      +"wiedziałem tylko, że istnieje)."; 

}
})();
