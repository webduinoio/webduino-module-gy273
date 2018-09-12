+(function (window, webduino) {

  'use strict';

  window.getGY273 = function (board, sda, scl) {
    return new webduino.module.GY273(board, sda, scl);
  };

}(window, window.webduino));
