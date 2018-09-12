+(function(factory) {
    if (typeof exports === 'undefined') {
        factory(webduino || {});
    } else {
        module.exports = factory;
    }
}(function(scope) {
    'use strict';

    var Module = scope.Module,
        BoardEvent = scope.BoardEvent,
        proto;

    var GY273_MESSAGE = [0x04, 0x43];

    var GY273Event = {
        MESSAGE: 'message'
    };

    function GY273(board, sda, scl) {
        Module.call(this);
        this.board = board;
        this.init = false;
        this._sda = sda;
        this._scl = scl;
        this._x = 0;
        this._y = 0;
        this._z = 0;
        this._degree = 0;
        this._direction = "";
        this.callback = function() {};
        this.messageHandler = onMessage.bind(this);
        this.board.send([0xf0, 0x04, 0x43, 0x00, this._sda, this._scl, 0xf7]);
    }

    function onMessage(event) {
        var msg = event.message;
        if (msg[0] == GY273_MESSAGE[0] && msg[1] == GY273_MESSAGE[1]) {
            this.emit(GY273Event.MESSAGE, msg.slice(2));
        }
    }

    GY273.prototype = proto = Object.create(Module.prototype, {
        // constructor: {
        //     value: GY273
        // },
        // state: {
        //     get: function() {
        //         return this.state;
        //     },
        //     set: function(val) {
        //         this.state = val;
        //     }
        // }
    });

    proto.on = function(callback) {
        this.board.send([0xf0, 0x04, 0x43, 0x01, 0xf7]);
        if (typeof callback !== 'function') {
            callback = function() {};
        }
        this.callback = function(rawData) {   //rawData為array
            // console.log(rawData);
            var val = '';
            for (var i = 0; i < rawData.length; i++) {
                val += String.fromCharCode(rawData[i]);
            }
            var StrAra = '[' + val + ']';
            var info = eval(StrAra);
            this._x = info[0];
            this._y = info[1];
            this._z = info[2];
            this._degree = info[3];
            this.arrow();
            callback(this._x, this._y, this._z, this._degree, this._direction);
        };
        this.state = 'on';
        this.board.on(BoardEvent.SYSEX_MESSAGE, this.messageHandler);
        this.addListener(GY273Event.MESSAGE, this.callback);
    };

    proto.off = function() {
        this.state = 'off';
        this.board.send([0xf0, 0x04, 0x43, 0x02, 0xf7]);
        this.board.removeListener(BoardEvent.SYSEX_MESSAGE, this.messageHandler);
        this.removeListener(GY273Event.MESSAGE, this.callback);
        this.callback = null;
    };

    proto.arrow = function() {
        if(this._degree > 337 || this._degree < 23){
          this._direction = '北';
        }else if(this._degree > 292) {
          this._direction = '西北';
        }else if(this._degree > 247) {
          this._direction = '西';
        }else if(this._degree > 202) {
          this._direction = '西南'; 
        }else if(this._degree > 157) {
          this._direction = '南';
        }else if(this._degree > 112) {
          this._direction = '東南';
        }else if(this._degree > 67) {
          this._direction = '東';
        }else if(this._degree > 22) {
          this._direction = '東北';
        }
        // console.log(this._direction);
    }

    scope.module.GY273 = GY273;
}));