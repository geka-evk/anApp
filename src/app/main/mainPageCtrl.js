(function() {
  'use strict';

  angular
    .module('anApp')
    .controller('mainPageCtrl', [ "fbSvc", mainPageCtrl ]);

  /** @ngInject */
  function mainPageCtrl(fbSvc) {
    var self = this;

    this.data = [];
    this.showPanel = false;

    fbSvc('sidebar').getData()
      .then( function (data) {
        self.data = data;
        self.showPanel = true;
        console.dir(self.data);
      });
    
  }
})();
