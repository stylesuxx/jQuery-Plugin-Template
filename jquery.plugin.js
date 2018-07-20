/* jQuery plugin Template
*
* Licensed under the MIT:
* http://www.opensource.org/licenses/mit-license.php
*
* Copyright (C) 2012 by Chris Landa chris[-at-]1337[-dot-]af
*/

(function($, jQuery){
  var methods = {
    init: function(options){
      var settings = {
        var1: 'value'
      };

      return this.each(function() {
        var $this = $(this);

        if(options){
          $.extend(settings, options);
        }

        console.log('This is the init method. The value of var1 is: ' + settings.var1);
        privateFunc();
      });
    },

    reset: function(){
      return this.each(function() {
        var $this = $(this);

        console.log('This is the reset method');
      });
    },

    destroy: function(){
      return this.each(function() {
        var $this = $(this);

        console.log('This is the destroy method');
      });
    },
  };

  $.fn.myPlugin = function(method){
    if(methods[method]){
      return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
    } else if(typeof method === 'object' || !method){
      return methods.init.apply(this, arguments);
    } else {
      $.error('Method ' +  method + ' does not exist on jQuery.myPlugin');
    }
  };

  var privateFunc = function(){
    console.log('This is a private function and only available in this namespace!');
  };

})(jQuery, jQuery);
